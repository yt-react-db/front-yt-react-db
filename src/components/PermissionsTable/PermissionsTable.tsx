import { YoutuberPermissions, columns } from "./columns"
import { DataTable } from "./data-table"
import { useQuery } from "@tanstack/react-query";

function parseDelay(delay: string | null) {

    if (delay === null) return "";

    const pattern = /^(\d+)([a-zA-Z]+)$/;
    const match = delay.match(pattern);

    if (match) {
        const value = parseInt(match[1]);
        let unit;
        switch (match[2]) {
            case "h":
                unit = "hour";
                break;
            case "d":
                unit = "day";
                break;
            case "w":
                unit = "week";
                break;
            case "m":
                unit = "month";
                break;
            case "y":
                unit = "year";
                break;
        }
        return `${value}-${unit}`;
    } else {
        console.error("Failed to parse delay");
        return "";
    }

}
async function getData(): Promise<YoutuberPermissions[]> {
    try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/permissions/full_list");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // I shouldn't have to do this, need to fix backend, too lazy rn
        const res = await response.json();
        res.forEach((row: YoutuberPermissions) => {
            if (row.can_react_live == "yes_with_delay") {
                row.can_react_live = `yes with a ${parseDelay(row.live_reaction_delay)} delay`;
            }
            if (row.can_upload_reaction == "yes_with_delay") {
                row.can_upload_reaction = `yes with a ${parseDelay(row.upload_reaction_delay)} delay`;
            }
        });
        return res;

    } catch (error) {
        console.error('Error fetching youtuber permissions:', error);
        throw error;
    }
}


export default function PermissionsTable() {
    const { data, status } = useQuery({ queryKey: ["permissions"], queryFn: getData })

    return (
        <div className="container mx-auto py-10">
            {status === "error" && <p>AN ERROR OCCURED, PLEASE RELOAD THE PAGE</p>}
            {status === "loading" && <DataTable columns={columns} data={[]} />}
            {status === "success" && <DataTable columns={columns} data={data} />}
        </div>
    )
}
