import smallBG from '@/assets/images/main-bg-small.png'
import { Button } from '@/components/ui'
import HomeNavbar from '@/components/shared/HomeNav'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void
    featuresRef: React.RefObject<HTMLElement>
    contactRef: React.RefObject<HTMLElement>
    aboutRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="bg-gradient-to-r from-[#1F2A30] to-[#0D1B22] min-h-screen w-full flex flex-col overflow-hidden">
            {/* Navbar */}
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center text-center relative z-10 text-white w-full max-w-[1440px] mx-auto px-6 min-h-screen pt-32">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight capitalize text-slate-50 font-lexend">
                    <span
                        className="text-white font-playfair"
                        style={{ fontWeight: 10 }}
                    >
                        AI Front Office
                    </span>
                    <br />
                    for Healthcare Agents
                </h1>

                {/* Subheading */}
                <p className="mt-8 text-xl md:text-xl lg:text-xl leading-relaxed text-[#f6f8f8] max-w-4xl font-Nunito">
                    Create your{' '}
                    <span className="font-normal inline-block tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                        AI Store
                    </span>{' '}
                    in just 2 minutes.
                    <br />
                    Accelerate growth with{' '}
                    <span className="font-normal inline-block tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                        Digital Marketing
                    </span>{' '}
                    tools.
                </p>

                {/* CTA Button */}
                <div className="mt-10">
                    <HcfSignupPopup
                        popupButtonStatus
                        buttonChildren={
                            <Button
                                block
                                variant="solid"
                                className="bg-gradient-to-r from-[#2DD4BF] to-[#1A8A75] hover:from-[#1A8A75] hover:to-[#2DD4BF] text-lg font-semibold text-white py-3 px-10 rounded-full shadow-lg transition-all duration-300 max-w-[220px]"
                            >
                                Get Started
                            </Button>
                        }
                    />
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-10 mt-16">
                    {[
                        { value: '2100+', label: 'Qualified Doctors' },
                        { value: '1000+', label: 'Hospitals' },
                        { value: '800+', label: 'Treatment Plans' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <h2 className="text-4xl font-bold text-white font-nunito">
                                {stat.value}
                            </h2>
                            <p className="text-lg text-gray-300 mt-2 capitalize font-Nunito tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="w-full flex justify-center items-center px-4 py-12 bg-[#1A8A75] mt-10 rounded-lg mb-5">
                    <div className="bg-[#0D1B22] p-4 md:p-8 rounded-3xl shadow-2xl max-w-6xl w-full">
                        <div className="rounded-2xl overflow-hidden aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/xQl8i2sO_Ls?list=TLGG0PJLA9GwZ7syNzA0MjAyNQ"
                                title="Medical Report Demo gogetwell.ai"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
