"use cliente";

import { Store } from "@prisma/client";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import * as z from 'zod';


interface SettingsFormProps {
    initialData: Store;
}

const formSchema = z.object({
    name: z.string().min(1),

});

type SettingFormValues = z.infer<typeof formSchema>


export const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading 
                    title="Settings"
                    description="Manage store prefernces"
                />
                <Button
                    variant="destructive"
                    size="icon"
                    // onClick={() => {}}
                >
                    <Trash className="h-4 w-4"/>

                </Button>
            </div>
            <Separator />
        </>
    )
}