"use client";

import { motion } from 'framer-motion';
import { User, FileText, Zap } from 'lucide-react';

const ACTIVITIES = [
    { id: 1, user: "STX_User1", action: "uploaded", target: "CSC 201 Past Questions", time: "2m ago", type: "upload" },
    { id: 2, user: "Edu_Expert", action: "tipped", target: "Data Structures Notes", time: "15m ago", type: "tip" },
    { id: 3, user: "Student_99", action: "reviewed", target: "Intro to Python", time: "1h ago", type: "review" },
];

export default function ActivityFeed() {
    return (
        <div className="max-w-3xl mx-auto mt-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                <Zap className="text-primary" /> Recent Activity
            </h3>
            <div className="space-y-4">
                {ACTIVITIES.map((activity, idx) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 glass border border-white/5 rounded-2xl hover:bg-white/5 transition-colors"
                    >
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            {activity.type === 'upload' ? <FileText size={18} /> : <User size={18} />}
                        </div>
                        <div className="flex-1">
                            <p className="text-foreground font-medium">
                                <span className="text-primary">{activity.user}</span> {activity.action} <span className="text-foreground font-bold">{activity.target}</span>
                            </p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
