import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Information about me"
}

const About = () => {
    return (
        <div className="flex flex-col space-y-6">
            <div>
                <h2>About</h2>
                <p className="text-muted-foreground">Who Am I ?</p>
            </div>
            <p className="text-lg">I am Raphaël, a junior developer from France 🇫🇷.</p>
        </div>
    );
};

export default About;