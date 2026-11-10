export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

type EventProps = {
    action: string;
    category: string;
    label?: string;
    value?: number;
    [key: string]: any;
}

export const pageview = (url: string) => {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: 'pageview',
            page: url,
        });
    }
};

export const event = ({ action, category, label, value, ...rest }: EventProps) => {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: 'customEvent',
            eventAction: action,
            eventCategory: category,
            eventLabel: label,
            eventValue: value,
            ...rest
        });
    }
};

// Type declaration for window.dataLayer
declare global {
    interface Window {
        dataLayer: any[];
    }
}