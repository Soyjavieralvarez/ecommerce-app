"use client";

import * as z from "zod";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from '@/hooks/use-store-modal';
import { useForm } from "react-hook-form";

const formSchema = z.object ({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const from = useForm

    return (
        <Modal
        title="Create store"
        description="Add a new store to manage products and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            Future Create Store Form
        </Modal>
    )
}