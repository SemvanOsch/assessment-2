import { useState } from 'react';
import React from 'react';

const sections = [
    { id: 'toepassen', title: 'Toepassen' },
    { id: 'reflecteren', title: 'Reflecteren' },
    { id: 'voorkeur', title: 'Voorkeur' },
    { id: 'nachtkastboek', title: 'Nachtkastboek' },
];

function App() {
    const [activeSection, setActiveSection] = useState('toepassen');
    const [toepassenIndex, setToepassenIndex] = useState(0);
    const [reflecterenIndex, setReflecterenIndex] = useState(0);
    const [isFadingToepassen, setIsFadingToepassen] = useState(false);
    const [isFadingReflecteren, setIsFadingReflecteren] = useState(false);

    const toepassenContent = [
        {
            text: (
                <div>
                    <h3 className="font-semibold mb-2">Rol: Betrokken Technoloog</h3>
                    <ul className="list-disc pl-5">
                        <li>VSD Hierarchie voor doelen vanuit waarden.</li>
                        <li>Critical Making om je aan het denken te zetten. Ook met behulp van AI.</li>
                        <li>VSD Evaluatie om snel erachter te komen waar extra aandacht aan besteed moet worden.</li>
                    </ul>
                </div>
            ),
            imageAlt: 'VSD Hierarchie',
            imageSrc: '/VSD-hierarchie.png',
        },
        {
            text: (
                <div>
                    <h3 className="font-semibold mb-2">Rol: Ondernemende Technoloog</h3>
                    <ul className="list-disc pl-5">
                        <li>VPC met meerdere JTBD</li>
                        <li>Mensen interviewen voor validatie.</li>
                        <li>BMC zet je echt aan het denken over de doelgroep.</li>
                        <li>De juiste manier van storytelling is cruciaal als je iets wilt verkopen.</li>
                    </ul>
                </div>
            ),
            imageAlt: 'VPC',
            imageSrc: '/VPC.jpg',
        },
    ];

    const reflecterenContent = [
        {
            text: (
                <div>
                    <h3 className="font-semibold mb-2">Rol: Betrokken Technoloog</h3>
                    <ul className="list-disc pl-5">
                        <li>Had niet echt dingen waar ik specifiek aan wou werken.</li>
                        <li>Vind het best zweverig.</li>
                        <li>Werkt heel goed voor de wat maar minder voor de hoe.</li>
                        <li>VSD evaluatie geeft je snel goede inzichten.</li>
                        <li>Je kan met AI snel dingen prototypen, ook als deze boven jouw programmeer level zijn.</li>
                    </ul>
                </div>
            ),
            imageAlt: '3d Hand',
            imageSrc: '/3d-hand.png',
        },
        {
            text: (
                <div>
                    <h3 className="font-semibold mb-2">Rol: Ondernemende Technoloog</h3>
                    <ul className="list-disc pl-5">
                        <li>Beter communiceren & meer uit comfort zone gaan.</li>
                        <li>VPC vind ik het lastig om vanuit de cirkel te denken</li>
                        <li>BMC helpt je heel erg met verder denken over de doelgroep.</li>
                    </ul>
                </div>
            ),
            imageAlt: 'BMC',
            imageSrc: '/BMC.jpg',
        },
    ];

    const handleSwitchWithFade = (setIndex, length, direction, setFading) => {
        setFading(true);
        setTimeout(() => {
            setIndex((prevIndex) =>
                direction === 'next'
                    ? (prevIndex + 1) % length
                    : (prevIndex - 1 + length) % length
            );
            setFading(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-[#FDF6F0] text-[#3B3B3B] font-sans">
            <header className="bg-white shadow-md shadow-[#E4DCD3] sticky top-0 z-10">
                <nav className="container mx-auto p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Mijn Signatuur</h1>
                    <div className="space-x-4">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`px-3 py-2 rounded-2xl transition-all duration-200 transform hover:scale-105 ${
                                    activeSection === section.id ? 'bg-[#9CAFAA] text-white' : 'hover:bg-[#D4CFC4]'
                                }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </nav>
            </header>

            <main className="container mx-auto p-6">
                {activeSection === 'toepassen' && (
                    <section className="transition-opacity duration-500 ease-in-out animate-fade-in">
                        <h2 className="text-2xl font-semibold mb-4">
                            Toepassen ({toepassenIndex + 1}/{toepassenContent.length})
                        </h2>
                        <div className="flex justify-between mb-4">
                            <button
                                onClick={() =>
                                    handleSwitchWithFade(setToepassenIndex, toepassenContent.length, 'prev', setIsFadingToepassen)
                                }
                                className="text-2xl px-4 py-2 bg-[#DDBEBE] rounded-full hover:bg-[#C4A7A7] hover:scale-105 transition-all"
                            >
                                ←
                            </button>
                            <button
                                onClick={() =>
                                    handleSwitchWithFade(setToepassenIndex, toepassenContent.length, 'next', setIsFadingToepassen)
                                }
                                className="text-2xl px-4 py-2 bg-[#DDBEBE] rounded-full hover:bg-[#C4A7A7] hover:scale-105 transition-all"
                            >
                                →
                            </button>
                        </div>
                        <div
                            className={`grid md:grid-cols-2 gap-6 transition-opacity duration-300 ${
                                isFadingToepassen ? 'opacity-0' : 'opacity-100'
                            }`}
                        >
                            <div
                                key={toepassenIndex}
                                className="bg-white p-6 border border-[#D4CFC4] rounded-2xl shadow-md shadow-[#E4DCD3]"
                            >
                                <div className="text-[#3B3B3B]">{toepassenContent[toepassenIndex].text}</div>
                            </div>
                            <div className="w-full h-64 bg-white p-2 border border-[#D4CFC4] rounded-2xl overflow-hidden shadow-md shadow-[#E4DCD3]">
                                <img
                                    src={toepassenContent[toepassenIndex].imageSrc}
                                    alt={toepassenContent[toepassenIndex].imageAlt}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'reflecteren' && (
                    <section className="transition-opacity duration-500 ease-in-out animate-fade-in">
                        <h2 className="text-2xl font-semibold mb-4">
                            Reflecteren ({reflecterenIndex + 1}/{reflecterenContent.length})
                        </h2>
                        <div className="flex justify-between mb-4">
                            <button
                                onClick={() =>
                                    handleSwitchWithFade(setReflecterenIndex, reflecterenContent.length, 'prev', setIsFadingReflecteren)
                                }
                                className="text-2xl px-4 py-2 bg-[#DDBEBE] rounded-full hover:bg-[#C4A7A7] hover:scale-105 transition-all"
                            >
                                ←
                            </button>
                            <button
                                onClick={() =>
                                    handleSwitchWithFade(setReflecterenIndex, reflecterenContent.length, 'next', setIsFadingReflecteren)
                                }
                                className="text-2xl px-4 py-2 bg-[#DDBEBE] rounded-full hover:bg-[#C4A7A7] hover:scale-105 transition-all"
                            >
                                →
                            </button>
                        </div>
                        <div
                            className={`grid md:grid-cols-2 gap-6 transition-opacity duration-300 ${
                                isFadingReflecteren ? 'opacity-0' : 'opacity-100'
                            }`}
                        >
                            <div
                                key={reflecterenIndex}
                                className="bg-white p-6 border border-[#D4CFC4] rounded-2xl shadow-md shadow-[#E4DCD3]"
                            >
                                <div className="text-[#3B3B3B]">{reflecterenContent[reflecterenIndex].text}</div>
                            </div>
                            <div className="w-full h-64 bg-white p-2 border border-[#D4CFC4] rounded-2xl overflow-hidden shadow-md shadow-[#E4DCD3]">
                                <img
                                    src={reflecterenContent[reflecterenIndex].imageSrc}
                                    alt={reflecterenContent[reflecterenIndex].imageAlt}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'voorkeur' && (
                    <section className="transition-opacity duration-500 ease-in-out animate-fade-in">
                        <h2 className="text-2xl flex justify-center font-semibold mb-4">Voorkeur</h2>
                        <div className="flex flex-col items-center justify-center gap-6 text-center">
                        <div className="bg-white p-6 border border-[#D4CFC4] rounded-2xl shadow-md shadow-[#E4DCD3]">
                                <div className="text-[#3B3B3B] text-left">
                                    <ul className={'list-disc pl-5 mb-4'}>
                                        <li>Onderzoekende Aanpak.</li>
                                        <li>Fijn om voor opdrachtgever te werken.</li>
                                        <li>Bij deze TLE ook de GDS van onderzoeken toegepast.</li>
                                        <li>Ondernemende Aanpak.</li>
                                        <li>Helpt met verder denken aan doelgroep.</li>
                                        <li>Helpt mij uit mijn comfort zone te gaan.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'nachtkastboek' && (
                    <section className="transition-opacity duration-500 ease-in-out animate-fade-in">
                        <h2 className="text-2xl flex justify-center font-semibold mb-4">Nachtkastboek</h2>
                        <div className="flex flex-col items-center justify-center gap-6 text-center">
                        <div className="bg-white p-6 border border-[#D4CFC4] rounded-2xl shadow-md shadow-[#E4DCD3]">
                            <ul className={'list-disc pl-5 mb-4 text-left'}>
                                <li>De Starbucks Strategie</li>
                                <li>Lastig want ik heb geen werknemers.</li>
                                <li>Hele duidelijke JTBD.</li>
                                <li>Informatie overbrengen.</li>
                                <li>Interactief om aandacht te behouden.</li>
                                <li>Niet teveel text, kleine animaties.</li>
                            </ul>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
