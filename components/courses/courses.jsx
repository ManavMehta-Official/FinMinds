import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import equity from '../../styles/images/equity.png';
import mutual from '../../styles/images/mutual.png';
import stock from '../../styles/images/stock.png';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  


const Courses = () => {
  return (
    <div>
      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
                <Image src={equity} alt="Equity" width={45} />
                Equity Funds
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 mt-2">
                <a href="/learn/equity/1" className='acc-hover'  passHref>1. Introduction to Equity Funds</a>
                <a href="/learn/equity/2" className='acc-hover'  passHref>2. Types of Equity Funds</a>
                <a href="/learn/equity/3" className='acc-hover'  passHref>3. Benifits of Equity Funds</a>
                <a href="/learn/equity/4" className='acc-hover'  passHref>4. Knowledge of Market Capitalization and Risk</a>
                <a href="/learn/equity/5" className='acc-hover'  passHref>5. Equity Funds for Retail Investors</a>
                <a href="/learn/equity/6" className='acc-hover'  passHref>6. Investment Strategies</a>
                <a href="/learn/equity/7" className='acc-hover' passHref>7. Advanced Topics in Equity Fund Investing</a>
                <a href="/learn/equity/8" className='acc-hover' passHref>8. Understanding Fund Expenses</a>
                <a href="/learn/equity/9" className='acc-hover' passHref>9. Tax Implication on Equities when Invested</a>
            </AccordionContent>
        </AccordionItem>
    </Accordion> */}

    <Accordion type="single" collapsible>
        <AccordionItem value="mutual">
            <AccordionTrigger className="text-lg">
                <Image src={mutual} alt="Mutual Funds" width={45} />
                Mutual Funds
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 mt-2">
                <a href="/learn/mutual/1" className='acc-hover'>1. Introduction to Mutual Funds</a>
                <a href="/learn/mutual/2" className='acc-hover'>2. Types of Mutual Funds</a>
                <a href="/learn/mutual/3" className='acc-hover'>3. Investment Strategies</a>
                <a href="/learn/mutual/4" className='acc-hover'>4. Risks and Considerations</a>
                <a href="/learn/mutual/5" className='acc-hover'>5. Tax Implications</a>
                <a href="/learn/mutual/6" className='acc-hover'>6. The Mutual Fund Industry</a>
                <a href="/learn/mutual/7" className='acc-hover'>7. Practical Aspects</a>
                <a href="/learn/mutual/8" className='acc-hover'>8. Case Studies and Real-life Examples</a>
            </AccordionContent>
        </AccordionItem>
    </Accordion>

    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
                <Image src={stock} alt="Stock Market" width={45} />
                Stock Market
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 mt-2">
                <a href="/learn/stocks/1" className='acc-hover'>1. Understanding the Stock Market: A Comprehensive Guide</a>
                <a href="/learn/stocks/2" className='acc-hover'>2. Types of Stocks and Stock Market Participants</a>
                <a href="/learn/stocks/3" className='acc-hover'>3. How the Stock Market Works</a>
                <a href="/learn/stocks/4" className='acc-hover'>4. Fundamental Analysis</a>
                <a href="/learn/stocks/5" className='acc-hover'>5. Technical Analysis</a>
                <a href="/learn/stocks/6" className='acc-hover'>6. Trading Strategies</a>
                <a href="/learn/stocks/7" className='acc-hover'>7. Market Research and Tools</a>
                <a href="/learn/stocks/8" className='acc-hover'>8. Regulatory Environment</a>
                <a href="/learn/stocks/9" className='acc-hover'>9. Building Your Portfolio</a>
                <a href="/learn/stocks/10" className='acc-hover'>10. Conclusion and Next Steps</a>
            </AccordionContent>
        </AccordionItem>
    </Accordion>

    </div>
  )
}

export default Courses;
