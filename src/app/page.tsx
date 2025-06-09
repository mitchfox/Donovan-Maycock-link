'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import { Bebas_Neue } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import WithMeLogo from '@/images/photos/withmelogo.png'
import Founders from '../images/photos/founders_logo.png'
import Coaching from '../images/photos/coaching.jpg'
import MealPlan from '../images/photos/meal_plan.webp'
import { TbPhoneCall, TbPhoneCalling, TbShoppingBag, TbWorld } from 'react-icons/tb'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 transform p-1 transition-transform hover:scale-110"
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-white transition group-hover:fill-white/80" />
    </Link>
  )
}

function LinkBox({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  href: string
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
    >
      <div className="flex flex-1 items-center gap-4">
        {image ? (
          <div className="aspect-square h-12 w-12 min-w-[3rem] overflow-hidden rounded-xl">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ) : (
          Icon && (
            <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl bg-white/5 p-2">
              <Icon className="h-6 w-6" />
            </div>
          )
        )}
        <div className="text-left">
          <h2 className="pr-6 text-xs font-bold text-white">{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-white/80" style={{lineHeight: '1.4'}}>{description}</p>
          )}
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  )
}

export default function Home() {
  const socialLinks = [
    {
      href: 'https://instagram.com/dcanutrition',
      icon: InstagramIcon,
    },
    {
      href: 'https://linkedin.com/company/dca-health-coaching',
      icon: LinkedInIcon,
    },
    {
      href: 'https://youtube.com/@DCAHealthCoaching',
      icon: YouTubeIcon,
    },
    {
      href: 'https://facebook.com/dcanutrition',
      icon: FacebookIcon,
    },
  ]

  const linksData = [
    {
      title: 'Visit us on Web',
      description:
        'We are here to help you become the healthiest version of yourself.',
      href: 'https://dcanutrition.com/',
      image: null,
      icon: TbWorld,
    },
    {
      title: 'Book a Free Consultation',
      description: 'Book Your Path To The healthiest you!',
      href: 'https://dcanutrition.com/booking-9928',
      image: Coaching,
      icon: null,
    },
    // {
    //   title: 'Schedule your free call',
    //   description: '',
    //   href: 'https://cecilia.dcanutrition.com/home',
    //   image: null,
    //   icon: TbPhoneCall,
    // },
    {
      title: 'Get our Nutrition Products',
      description: '',
      href: 'https://shop.dcanutrition.com/',
      image: null,
      icon: TbShoppingBag,
    },
    {
      title: 'Free Resources',
      description: 'Here is your free Meal Plan for Busy Professionals download',
      href: 'https://dcanutrition.com/freedcanutritiondownloads',
      image: MealPlan,
      icon: null,
    },
    {
      title: 'Courses, Coaching and Membership',
      description: '',
      href: 'https://withme.so/dcacoaching',
      image: WithMeLogo,
      icon: null,
    },
    {
      title: 'Contact Us',
      description: '',
      href: 'tel:2105601082',
      image: null,
      icon: TbPhoneCalling,
    },
  ]

  return (
    <>
      <Container className="flex-1 bg-zinc-950 pb-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30dvh] bg-gradient-to-b from-transparent via-transparent to-zinc-950 sm:hidden"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.95) 75%, #000000 100%)',
                }}
              />
              <div className="mx-auto h-[40dvh] sm:mt-12 sm:h-48 sm:w-40 md:h-72 md:w-64">
                <img
                  src={Founders.src}
                  alt="Founders"
                  className="h-full w-full object-cover object-top sm:rounded-3xl"
                />
              </div>
            </div>

            <div className="relative z-30">
              <h1
                className={`${bebasNeue.className} -mt-16 mb-4 text-4xl leading-none text-white sm:mt-6 sm:text-5xl`}
              >
                DCA Nutrition
              </h1>
              <p className="mb-8 px-6 text-sm text-white/80">
                Live your best Life again in 2025
              </p>

              <div className="mb-12 flex justify-center gap-6">
                {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
                {socialLinks.map(({ href, icon: Icon }) => (
                  <SocialLink key={href} href={href} icon={Icon} />
                ))}
              </div>

              <div className="space-y-4 px-4">
                {linksData.map(({ title, description, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    {...(icon ? { icon } : {})}
                    {...(image ? { image:image.src } : {})}
                  />
                ))}
              </div>
              <FreeTrialBanner />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
