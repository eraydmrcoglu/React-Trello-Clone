import { create } from "zustand";

interface ModalState {
  setImage: any;
  image: any;
  setNewTaskInput: any;
  newTaskInput: any;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  setImage: (value: any) => set({ image: value }),
  image: null,
  setNewTaskInput: (value: any) => set({ newTaskInput: value }),
  newTaskInput: null,
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
