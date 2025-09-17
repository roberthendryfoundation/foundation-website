import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/Card";

const exercises = [
    {
        title: "Box Breathing (4-4-4-4)",
        description:
            "Inhale for 4, hold for 4, exhale for 4, hold for 4. Helps reduce stress and improve focus.",
        video: "https://www.youtube.com/embed/tEmt1Znux58",
    },
    {
        title: "4-7-8 Breathing",
        description:
            "Inhale for 4, hold for 7, exhale for 8. A calming exercise for anxiety and better sleep.",
        video: "https://www.youtube.com/embed/gz4G31LGyog",
    },
    {
        title: "Diaphragmatic Breathing",
        description:
            "Breathe deeply into your belly for 5–6 seconds, then exhale slowly. Useful for calming panic attacks.",
        video: "https://www.youtube.com/embed/kgTL5G1ibIo",
    },
    {
        title: "Coherent Breathing (5-5)",
        description:
            "Inhale for 5 seconds, exhale for 5 seconds. Builds heart-breath coherence and lowers stress.",
        video: "https://www.youtube.com/embed/p8fjYPC-k2k",
    },
];

export default function BreathingPage() {
    return (
        <section className="max-w-5xl mx-auto py-20 px-4 space-y-10">
            <h1 className="text-4xl font-bold text-center text-foreground mb-6">
                Breathing Exercises for Mental Health
            </h1>
            <p className="text-center text-lg text-muted-foreground mb-12">
                Explore different techniques to reduce stress, calm anxiety, improve sleep,
                and restore focus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {exercises.map((exercise, index) => (
                    <Card key={index} className="text-center">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">
                                {exercise.title}
                            </CardTitle>
                            <CardDescription>{exercise.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-md border border-border">
                                <iframe
                                    className="w-full h-full"
                                    src={exercise.video}
                                    title={exercise.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
