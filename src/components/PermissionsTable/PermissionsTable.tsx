import { YoutuberPermissions, columns } from "./columns"
import { DataTable } from "./data-table"
import { useQuery } from "@tanstack/react-query";


async function getData(): Promise<YoutuberPermissions[]> {
    try {
        const response = await fetch("http://localhost:8080/permissions/full_list");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // I shouldn't have to do this, need to fix backend, too lazy rn
        const res = await response.json();
        res.forEach((row: YoutuberPermissions) => {
            if (row.can_react_live !== "yes_with_delay") {
                row.live_reaction_delay = null;
            }
            if (row.can_upload_reaction !== "yes_with_delay") {
                row.upload_reaction_delay = null;
            }
        });
        console.log(res);
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
