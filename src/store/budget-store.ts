import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BudgetRequest } from '../types/budget';

interface BudgetState {
  budgetRequests: BudgetRequest[];
  addBudgetRequest: (request: Omit<BudgetRequest, 'id' | 'createdAt' | 'status'>) => BudgetRequest;
  clearHistory: () => void;
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set) => ({
      budgetRequests: [],
      addBudgetRequest: (request) => {
        const newRequest: BudgetRequest = {
          ...request,
          id: Math.random().toString(36).substring(2, 9),
          status: 'pending',
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          budgetRequests: [newRequest, ...state.budgetRequests],
        }));

        return newRequest;
      },
      clearHistory: () => set({ budgetRequests: [] }),
    }),
    {
      name: 'vektor-visual-budgets',
    }
  )
);
