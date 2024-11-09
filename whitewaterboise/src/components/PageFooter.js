import React from 'react';
import { Footer } from 'flowbite-react';

const PageFooter = () => {
    return (
        <>
            <Footer container className="mt-auto bg-gray-900 py-8 rounded-none">
                <div className="w-full text-center text-white">
                    <Footer.Copyright href="#" by="Whitewater TMS" year={2024} />
                    <Footer.LinkGroup className="mt-4">
                        <Footer.Link href="about" className="text-white hover:text-cyan-300">
                            About Us
                        </Footer.Link>
                        <Footer.Link href="privacy" className="text-white hover:text-cyan-300">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="termsofservice" className="text-white hover:text-cyan-300">
                            Terms of Service
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </Footer></>
    );
};

export default PageFooter;
