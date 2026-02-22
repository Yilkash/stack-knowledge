import { Resource } from '@/types';
import ResourceCard from './ResourceCard';
import { motion } from 'framer-motion';

interface FeaturedResourcesProps {
    resources: Resource[];
}

/**
 * Section for displaying highlighted/trending educational resources.
 * 
 * @param {FeaturedResourcesProps} props - Component props
 */
export default function FeaturedResources({ resources }: FeaturedResourcesProps) {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-12"
                >
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black text-foreground tracking-tighter uppercase mb-4">
                            Featured <span className="text-primary">Resources</span>
                        </h2>
                        <p className="text-muted-foreground font-medium">
                            Trending handouts and past questions curated by the StackKnowledge community.
                        </p>
                    </div>
                    <div className="hidden sm:block">
                        <a href="/resources" className="text-primary font-bold hover:underline">View all resources →</a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ResourceCard resource={resource} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
