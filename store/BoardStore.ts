import { create } from "zustand";
interface BoardsState {
  board: Board;
  getBoard: () => void;
}

const useBoardStore = create((set) => ({
  board: null,
  getBoard: () => {},
}));
