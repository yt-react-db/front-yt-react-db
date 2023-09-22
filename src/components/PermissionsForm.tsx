"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Check, XCircle } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { useState } from "react";


const PermissionsEnum = z.enum(["yes", "yes_with_delay", "no"]);
const DelayUnitEnum = z.enum(["d", "w", "m", "y"]); // days, weeks, months...

const formSchema = z.object({
    can_react_live: PermissionsEnum,
    live_reaction_delay_value: z.nullable(z.coerce.number().min(1).max(999)),
    live_reaction_delay_unit: z.nullable(DelayUnitEnum),

    can_upload_reaction: PermissionsEnum,
    upload_reaction_delay_value: z.nullable(z.coerce.number().min(1).max(999)),
    upload_reaction_delay_unit: z.nullable(DelayUnitEnum),
})

interface props {
    channelInfo: ChannelInfo,
    setStep: React.Dispatch<React.SetStateAction<number>>,
}

interface ChannelInfo {
    token: string,
    id: string,
    title: string,
}

// modern forms: typescript + zod + useForm + radix UI, TrollDespair
// seriously look at this shit for 4 selects and 2 inputs
export default function PermissionsForm({ channelInfo, setStep }: props) {
    const [leState, setLeState] = useState(1);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {

            can_react_live: "yes",
            live_reaction_delay_value: 1,
            live_reaction_delay_unit: "d",

            can_upload_reaction: "yes",
            upload_reaction_delay_value: 1,
            upload_reaction_delay_unit: "d",

        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        setStep(4);
        setLeState(2);
        try {
            const res = await fetch("http://localhost:8080/set_permissions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...values, token: channelInfo.token }),
            });
            if (res.ok) {
                setLeState(3);
                setStep(5);
            } else {
                setLeState(-2);
                setStep(-4);
            }
        } catch (e) {
            setLeState(-2);
            console.log(e)
            // TODO: deal with error
            setStep(-4);
        }


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

                <FormField
                    control={form.control}
                    name="can_react_live"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Can react live?</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="yes" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="yes_with_delay">Yes with a delay</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {(form.watch("can_react_live") === "yes_with_delay") ?
                    (<><div className="flex flex-row">
                        <FormField
                            control={form.control}
                            name="live_reaction_delay_value"
                            render={({ field }) => (

                                <FormItem className="inline">
                                    <FormLabel>Delay</FormLabel>
                                    <Input type="number" min="1" max="999" onChange={field.onChange} defaultValue={field.value ?? 1} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="live_reaction_delay_unit"
                            render={({ field }) => (
                                <FormItem className="inline">
                                    <FormLabel>unit</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value ?? 'd'}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="delay unit" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="d">day(s)</SelectItem>
                                            <SelectItem value="w">week(s)</SelectItem>
                                            <SelectItem value="m">month(s)</SelectItem>
                                            <SelectItem value="y">year(s)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                        <Separator />
                    </>
                    )
                    : null}


                {/** Do the same with upload */}
                <FormField
                    control={form.control}
                    name="can_upload_reaction"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Can upload reaction?</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="yes" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="yes_with_delay">Yes with a delay</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {(form.watch("can_upload_reaction") === "yes_with_delay") ?
                    (<><div className="flex flex-row">
                        <FormField
                            control={form.control}
                            name="upload_reaction_delay_value"
                            render={({ field }) => (

                                <FormItem className="inline">
                                    <FormLabel>Delay</FormLabel>
                                    <Input type="number" min="1" max="999" onChange={field.onChange} defaultValue={field.value ?? 1} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="upload_reaction_delay_unit"
                            render={({ field }) => (
                                <FormItem className="inline">
                                    <FormLabel>unit</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value ?? 'd'}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="delay unit" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="d">day(s)</SelectItem>
                                            <SelectItem value="w">week(s)</SelectItem>
                                            <SelectItem value="m">month(s)</SelectItem>
                                            <SelectItem value="y">year(s)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    </>
                    )
                    : null}

                {leState === 1 ?
                    <Button type="submit">Submit</Button> :
                    leState === 2 ?
                        (<><ReloadIcon className="mr-4 animate-spin" /> Saving...</>) :
                        leState === -2 ? (<Button disabled className="bg-red-500"><XCircle /> Failed</Button>)
                            : (<Button disabled className="bg-green-500"><Check /> Saved</Button>)
                }
            </form>
        </Form>
    );
}