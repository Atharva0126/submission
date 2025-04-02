import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Student {
  id: number;
  name: string;
  roll_number: string;
  class: string;
  section: string;
  attendance: number;
  marks: { maths: number; science: number; english: number };
}

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload;
    },
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action: PayloadAction<number>) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  },
});

export const { setStudents, addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;