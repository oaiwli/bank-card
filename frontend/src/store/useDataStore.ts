import { create } from "zustand";
import axios from "axios";

interface DataState {
  cards: {
    number: string;
    month: string;
    year: string;
    cvv: string;
  };
  setCard: (cardKey: keyof DataState["cards"], value: string) => void;
  saveData: () => Promise<void>;
  fetchData: () => Promise<void>;
  savedData: Array<DataState["cards"]>;
}

const useDataStore = create<DataState>((set, get) => ({
  cards: {
    number: "",
    month: "",
    year: "",
    cvv: "",
  },
  savedData: [],
  setCard: (cardKey, value) =>
    set((state) => ({
      cards: { ...state.cards, [cardKey]: value },
    })),
  saveData: async () => {
    const { cards } = get();
    try {
      await axios.post("http://localhost:3001/api/data", cards, {
        withCredentials: true,
      });
      set({ cards: { number: "", month: "", year: "", cvv: "" } });
    } catch (error) {
      console.error("Error saving data", error);
    }
  },
  fetchData: async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/data");
      set({ savedData: response.data });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  },
}));

export default useDataStore;
