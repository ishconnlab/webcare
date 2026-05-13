import { createContext, useContext, useReducer, useState, type Dispatch, type ReactNode } from "react";
import type { PortfolioData, StepName } from "./types";

const defaultPortfolio: PortfolioData = {
  personalInfo: { name: "", role: "", bio: "", profileImage: "", cvName: "" },
  skills: [],
  projects: [],
  experience: [],
  education: [],
  services: [],
  contact: { email: "", phone: "", location: "" },
  socialLinks: [],
  theme: { primary: "#2563eb", secondary: "#1e40af", accent: "#f59e0b", font: "'Inter', sans-serif", headingFont: "'Inter', sans-serif", style: "modern" },
  style: "modern",
  sections: {
    about: true,
    skills: true,
    projects: true,
    experience: true,
    education: true,
    services: true,
    testimonials: false,
    contact: true,
  },
};

type Action =
  | { type: "SET_PERSONAL"; field: string; value: string }
  | { type: "SET_CONTACT"; field: string; value: string }
  | { type: "SET_THEME"; field: string; value: string }
  | { type: "SET_SECTION"; field: string; value: boolean }
  | { type: "SET_STYLE"; value: string }
  | { type: "SET_IMAGE"; field: string; value: string }
  | { type: "ADD_ITEM"; section: "skills" | "projects" | "experience" | "education" | "services"; item: unknown }
  | { type: "UPDATE_ITEM"; section: "skills" | "projects" | "experience" | "education" | "services"; id: string; item: unknown }
  | { type: "REMOVE_ITEM"; section: "skills" | "projects" | "experience" | "education" | "services"; id: string }
  | { type: "ADD_SOCIAL"; item: unknown }
  | { type: "REMOVE_SOCIAL"; id: string }
  | { type: "RESET" };

function reducer(state: PortfolioData, action: Action): PortfolioData {
  switch (action.type) {
    case "SET_PERSONAL":
      return { ...state, personalInfo: { ...state.personalInfo, [action.field]: action.value } };
    case "SET_CONTACT":
      return { ...state, contact: { ...state.contact, [action.field]: action.value } };
    case "SET_THEME":
      return { ...state, theme: { ...state.theme, [action.field]: action.value } };
    case "SET_SECTION":
      return { ...state, sections: { ...state.sections, [action.field as keyof typeof state.sections]: action.value } };
    case "SET_STYLE":
      return { ...state, style: action.value, theme: { ...state.theme, style: action.value } };
    case "SET_IMAGE":
      return { ...state, personalInfo: { ...state.personalInfo, [action.field]: action.value } };
    case "ADD_ITEM":
      return { ...state, [action.section]: [...(state[action.section] as unknown[]), action.item] } as PortfolioData;
    case "UPDATE_ITEM":
      return {
        ...state,
        [action.section]: (state[action.section] as { id: string }[]).map((i) =>
          i.id === action.id ? action.item : i
        ),
      } as PortfolioData;
    case "REMOVE_ITEM":
      return {
        ...state,
        [action.section]: (state[action.section] as { id: string }[]).filter((i) => i.id !== action.id),
      } as PortfolioData;
    case "ADD_SOCIAL":
      return { ...state, socialLinks: [...state.socialLinks, action.item as never] };
    case "REMOVE_SOCIAL":
      return { ...state, socialLinks: state.socialLinks.filter((s) => s.id !== action.id) };
    case "RESET":
      return { ...defaultPortfolio, personalInfo: { ...defaultPortfolio.personalInfo } };
    default:
      return state;
  }
}

interface PortfolioContextType {
  data: PortfolioData;
  dispatch: Dispatch<Action>;
  currentStep: StepName;
  setStep: (step: StepName) => void;
}

const PortfolioCtx = createContext<PortfolioContextType | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, dispatch] = useReducer(reducer, defaultPortfolio);
  const [currentStep, setCurrentStep] = useState<StepName>("personal");

  return (
    <PortfolioCtx.Provider value={{ data, dispatch, currentStep, setStep: setCurrentStep }}>
      {children}
    </PortfolioCtx.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioCtx);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
}
