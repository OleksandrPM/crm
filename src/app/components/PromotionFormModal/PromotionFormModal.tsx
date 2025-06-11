'use client';

import React from 'react';
import { PromotionForm } from '@/app/components/PromotionForm';
import Modal, { ModalProps } from '@/app/components/Modal';

export interface PromotionFormModalProps extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onCloseAction,
  ...rest
}: PromotionFormModalProps) {
  return (
    <Modal {...rest} onCloseAction={onCloseAction}>
      <PromotionForm companyId={companyId} onSubmit={() => onCloseAction()} />
    </Modal>
  );
}
