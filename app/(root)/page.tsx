"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import { Children } from 'react';

const SetUpPage = () => {
    return (
      <div className="p-4">
       <Modal title="Test" description="Test description" isOpen onClose={() => {}}>
        Children
       </Modal>
      </div>
    )
  }

  export default SetUpPage;

  