type THEME = 'light' | 'dark';
interface WidgetProps {
    apiHost?: string;
    apiKey?: string;
    avatar?: string;
    title?: string;
    description?: string;
    heroTitle?: string;
    heroDescription?: string;
    size?: 'small' | 'medium' | 'large' | {
        custom: {
            width: string;
            height: string;
            maxWidth?: string;
            maxHeight?: string;
        };
    };
    theme?: THEME;
    buttonIcon?: string;
    buttonText?: string;
    buttonBg?: string;
    collectFeedback?: boolean;
    showSources?: boolean;
    defaultOpen?: boolean;
}
interface SearchBarProps {
    apiHost?: string;
    apiKey?: string;
    theme?: THEME;
    placeholder?: string;
    width?: string;
    buttonText?: string;
}
export const DocsGPTWidget: (props: WidgetProps) => import("react/jsx-runtime").JSX.Element;
export const SearchBar: ({ apiKey, apiHost, theme, placeholder, width, buttonText }: SearchBarProps) => import("react/jsx-runtime").JSX.Element;

//# sourceMappingURL=types.d.ts.map
