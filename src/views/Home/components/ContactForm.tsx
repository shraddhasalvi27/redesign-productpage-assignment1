import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [formState, setFormState] = useState<{
        fullname: string;
        email: string;
        subject: string;
        message: string;
    }>({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState)
            setIsSubmitting(false);
            toast.push(
                <Notification title={'Success'} type={'success'}>
                    Successfully submitted
                </Notification>
            );
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            setIsSubmitting(false);
            toast.push(
                <Notification title={err?.response?.data.message} type={'danger'}>
                    {err?.response?.data.message}
                </Notification>
            );
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className=" bg-gradient-to-r from-[#1F2A30] to-[#0D1B22] py-12 px-4 sm:px-6 lg:px-8 dark:bg-gradient-to-r dark:from-[#1C2529] dark:to-[#2E3B47]">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">Let's get in touch!</h2>
                    <p className="text-white dark:text-gray-300 text-lg">
                        Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Contact Details */}
                    <div className="flex items-center space-x-4">
                        <div className="bg-[#1A8A75] p-3 rounded-lg transition-transform transform hover:scale-105">
                            <BiPhone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-white">Phone</p>
                            <a href="tel:+919811396858" className="text-white hover:text-[#1A8A75] dark:text-white dark:hover:text-[#1A8A75] transition-colors">
                                +91 9811396858
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-[#1A8A75] p-3 rounded-lg transition-transform transform hover:scale-105">
                            <CgMail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-white">Email</p>
                            <a href="mailto:hello@gogetwell.ai" className="text-white hover:text-[#1A8A75] dark:text-white dark:hover:text-[#1A8A75] transition-colors">
                                hello@gogetwell.ai
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white dark:text-white mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <Link to="https://x.com/gogetwellai" target='_blank' className="bg-[#1A8A75] p-3 rounded-lg hover:bg-[#2DD4BF] dark:bg-[#1A8A75] dark:hover:bg-[#2DD4BF] transition-colors">
                            <BsTwitter className="w-6 h-6 text-white" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/gogetwellai/" target='_blank' className="bg-[#1A8A75] p-3 rounded-lg hover:bg-[#2DD4BF] dark:bg-[#1A8A75] dark:hover:bg-[#2DD4BF] transition-colors">
                            <BsLinkedin className="w-6 h-6 text-white" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#2a3d3f] rounded-2xl shadow-xl p-4 sm:p-8 dark:bg-[#1A8A75] dark:text-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'fullName' || formState.fullname ? 'text-[#1A8A75]' : 'text-gray-400'}`}>
                            <BiUser className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            value={formState.fullname}
                            onChange={handleChange}
                            onFocus={() => setFocused('fullname')}
                            onBlur={() => setFocused('')}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#2a3d3f] border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2DD4BF] focus:border-[#2DD4BF] transition-all"
                            required
                        />
                    </div>

                    <div className="relative">
                        <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'email' || formState.email ? 'text-[#1A8A75]' : 'text-gray-400'}`}>
                            <CgMail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onChange={handleChange}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused('')}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#2a3d3f] border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2DD4BF] focus:border-[#2DD4BF] transition-all"
                            required
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formState.message}
                            onChange={handleChange}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused('')}
                            rows={4}
                            className="w-full p-4 bg-white dark:bg-[#2a3d3f] border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2DD4BF] focus:border-[#2DD4BF] transition-all"
                            required
                        />
                    </div>

                    <Button
                        loading={isSubmitting}
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#2DD4BF] to-[#1A8A75] hover:from-[#1A8A75] hover:to-[#2DD4BF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-transparent transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    >
                        <span>Submit</span>
                        <BiSend className="w-5 h-5" />
                    </Button>
                </form>
            </div>
        </div>
    </div>
</div>

    );
};

export default ContactForm;
