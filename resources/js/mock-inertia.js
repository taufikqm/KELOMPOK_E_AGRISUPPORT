/**
 * Mock Inertia modules for standalone Vite preview.
 * This file simulates @inertiajs/react hooks so the components can render
 * without a real Laravel backend.
 */
import { createContext, useContext } from 'react';

const mockUser = {
    id: 1,
    name: 'Bpk. Suherman',
    email: 'suherman@agrisupport.id',
};

const PageContext = createContext({
    props: { auth: { user: mockUser } },
});

export function usePage() {
    return useContext(PageContext);
}

export function Head({ title }) {
    if (typeof document !== 'undefined') {
        document.title = title || 'AgriSupport';
    }
    return null;
}

export function Link({ href, method, as, children, className, ...props }) {
    const Tag = as === 'button' ? 'button' : 'a';
    return (
        <Tag
            href={Tag === 'a' ? (href || '#') : undefined}
            className={className}
            onClick={(e) => {
                if (method === 'post') e.preventDefault();
                props.onClick && props.onClick(e);
            }}
            {...props}
        >
            {children}
        </Tag>
    );
}

export function useForm(initialData) {
    const [data, setDataState] = React.useState(initialData);
    const [processing, setProcessing] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const setData = (key, value) => {
        if (typeof key === 'string') {
            setDataState(prev => ({ ...prev, [key]: value }));
        }
    };

    const post = (url, options = {}) => {
        setProcessing(true);
        console.log('[Mock POST]', url, data);
        setTimeout(() => {
            setProcessing(false);
            alert('✅ Data berhasil disimpan! (Preview Mode)');
            options.onSuccess && options.onSuccess();
        }, 1000);
    };

    const reset = () => setDataState(initialData);

    return { data, setData, post, processing, errors, reset };
}

export const router = {
    delete: (url, options = {}) => {
        console.log('[Mock DELETE]', url);
        alert('🗑️ Data dihapus! (Preview Mode)');
        options.onSuccess && options.onSuccess();
    },
};

import React from 'react';

// Global route() helper mock
if (typeof window !== 'undefined') {
    window.route = function (name, params) {
        const routes = {
            'dashboard': '/dashboard',
            'wilayah-lahan.index': '/wilayah-lahan',
            'wilayah-lahan.store': '/wilayah-lahan',
            'wilayah-lahan.update': '/wilayah-lahan/' + (params || ''),
            'wilayah-lahan.destroy': '/wilayah-lahan/' + (params || ''),
            'profile.edit': '/profile',
            'logout': '/logout',
        };
        const url = routes[name] || '#';
        const fn = () => url;
        fn.current = (routeName) => routeName === 'wilayah-lahan.index';
        return typeof name === 'undefined' ? { current: () => false } : (routes[name] ? fn : fn);
    };
    window.route.current = (name) => name === 'wilayah-lahan.index';
}
