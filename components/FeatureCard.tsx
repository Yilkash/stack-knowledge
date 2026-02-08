import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
            <p className="text-zinc-600">{description}</p>
        </div>
    );
}
