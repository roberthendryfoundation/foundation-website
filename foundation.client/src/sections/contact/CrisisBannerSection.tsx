import { Phone } from 'lucide-react';

export function CrisisBannerSection() {
    return (
        <section className="bg-red-50 border-b border-red-200 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-red-800 mb-2">Need Immediate Help?</h2>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <a href="tel:988" className="flex items-center text-red-700 hover:text-red-900">
                            <Phone className="h-4 w-4 mr-1" />
                            988 Crisis Lifeline
                        </a>
                        <a href="tel:911" className="flex items-center text-red-700 hover:text-red-900">
                            <Phone className="h-4 w-4 mr-1" />
                            911 Emergency
                        </a>
                        <a href="tel:1-800-SUPPORT" className="flex items-center text-red-700 hover:text-red-900">
                            <Phone className="h-4 w-4 mr-1" />
                            1-800-SUPPORT (Local Crisis Line)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
