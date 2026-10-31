import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeading from './SectionHeading';

const FAQS = [
  {
    question: 'Will cold email harm our main domain or brand reputation?',
    answer:
      'No — that is the entire point of the architecture. Campaigns run exclusively from secondary domains that are fully isolated from your primary domain. Your main domain never sends cold email, so its reputation is never exposed. If a secondary domain ever underperforms, we retire it and rotate in a replacement.',
  },
  {
    question: 'How do you ensure emails land in the primary inbox, not spam?',
    answer:
      'Three layers. Authentication: SPF, DKIM, DMARC and BIMI configured correctly on every domain. Reputation: mailboxes are warmed gradually over two to three weeks instead of blasting from day one. Content hygiene: short plain-text-style copy, no spam-trigger phrasing, no image-heavy templates, and daily bounce and complaint monitoring. Every mailbox sends well below provider thresholds.',
  },
  {
    question: 'What do we need to provide to get started?',
    answer:
      'Your ICP criteria and your value proposition — that is it. We handle domain purchase, DNS records, mailbox provisioning, warm-up, lead sourcing, verification, copywriting and campaign build. Expect roughly 30 minutes of your time in week one and a 20-minute review in week two.',
  },
  {
    question: 'How fast do we see the first booked meetings?',
    answer:
      'Typically two to three weeks from kickoff. Week one is infrastructure and warm-up, week two is copy and list build, and campaigns launch at the end of week two. First replies usually arrive within days of launch, with booked calls following in the first weeks of sending.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions every serious buyer asks."
          description="If yours isn't here, ask it on the call — we'd rather answer it directly than write another paragraph."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="border-t border-ink-line">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-b border-ink-line">
                <AccordionTrigger className="py-6 text-left text-[15px] font-medium text-ink-strong transition-colors hover:text-brand hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-7 text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}