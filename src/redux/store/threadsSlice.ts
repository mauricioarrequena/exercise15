import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Thread = {
  id: number;
  name: string;
  active: boolean;
  unreadCount: number;
};

const initialState: Thread[] = [
  { id: 1, name: "Project Kickoff", active: true, unreadCount: 3 },
  { id: 2, name: "Design Feedback", active: false, unreadCount: 0 },
  { id: 3, name: "Sprint Planning", active: true, unreadCount: 5 },
  { id: 4, name: "Bug Reports", active: true, unreadCount: 1 },
  { id: 5, name: "Random Chat", active: false, unreadCount: 2 },
];

export const threadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    toggleActive(state, action: PayloadAction<number>) {
      const thread = state.find((t) => t.id === action.payload)!;
      thread.active = !thread.active;
    },
    resetUnreadCount(state, action: PayloadAction<number>) {
      const thread = state.find((t) => t.id === action.payload)!;
      thread.unreadCount = 0;
    },
  },
});

export const { toggleActive, resetUnreadCount } = threadsSlice.actions;
export default threadsSlice.reducer;
