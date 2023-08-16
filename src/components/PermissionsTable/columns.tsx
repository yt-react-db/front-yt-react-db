"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// should probably define 2 types, on for receiving data & the other for columns
// since I am going to merge can_react_live + live_reaction_delay (same for upload)
export type YoutuberPermissions = {

    channel_id: string
    channel_title: string,
    can_react_live: "yes" | "yes_with_delay" | "no" | string,
    live_reaction_delay: string | null,
    can_upload_reaction: "yes" | "yes_with_delay" | "no" | string,
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
        accessorKey: "can_upload_reaction",
        header: "Can upload reaction?",
    },
    {
        accessorKey: "last_updated_at",
        header: "Last update",
    },
]
