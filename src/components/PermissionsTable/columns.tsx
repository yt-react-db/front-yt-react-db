"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type YoutuberPermissions = {

    channel_id: string
    channel_title: string,
    can_react_live: "yes" | "yes_with_delay" | "no",
    live_reaction_delay: string | null,
    can_upload_reaction: "yes" | "yes_with_delay" | "no",
    upload_reaction_delay: string | null,
    last_upload_time: string,

}

export const columns: ColumnDef<YoutuberPermissions>[] = [
    {
        accessorKey: "channel_id",
        header: "ID",
    },
    {
        accessorKey: "channel_title",
        header: "Channel's Name",
    },
    {
        accessorKey: "can_react_live",
        header: "Can react live?",
    },
    {
        accessorKey: "live_reaction_delay",
        header: "Live reaction delay",
    },
    {
        accessorKey: "can_upload_reaction",
        header: "Can upload reaction",
    },
    {
        accessorKey: "upload_reaction_delay",
        header: "Upload reaction delay",
    },
    {
        accessorKey: "last_updated_at",
        header: "Last update",
    },
]
