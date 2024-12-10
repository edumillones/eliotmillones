"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Mail, Linkedin, Phone, MapPin, Download, Calendar, User, Flag, CreditCard, StampIcon as Passport } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { LanguageSelector } from './components/LanguageSelector'
import { translations } from './translations'

function PageContent() {
  const { language } = useLanguage()
  const t = translations[language]

  const personalInfo = [
    { icon: User, label: t.fullName, value: "Eliot Eduardo Millones Maguiña" },
    { icon: Calendar, label: t.birthdate, value: language === 'en' ? "October 13, 1970 (54 years old)" : "13 de Octubre, 1970. (54 años)" },
    { icon: User, label: t.maritalStatus, value: language === 'en' ? "Divorced" : "Divorciado" },
    { icon: Flag, label: t.nationality, value: language === 'en' ? "Peruvian" : "Peruano" },
    { icon: CreditCard, label: t.dni, value: "09787974" },
    { icon: Passport, label: t.passport, value: "N°122243254" },
    { icon: Calendar, label: t.passportExpiry, value: language === 'en' ? "July 6, 2027" : "6 de Julio, 2027" },
    { icon: Phone, label: t.phone, value: "+51 968156053" },
    { icon: Mail, label: t.email, value: "eliot70millones@gmail.com" },
    { icon: MapPin, label: t.address, value: "Jr. Baños del Inca 274 - Urb. Tahuantinsuyo, Lima - Perú" },
  ]

  const projects = [
    {
      date: "2023 – Present",
      company: "SICIM Guyana, Georgetown-Demerara-Guyana",
      position: language === 'en' ? "Supervisor Storekeeper" : "Supervisor Storekeeper",
      project: "C6 Gas To Energy Proyect (GTE)",
      client: "ExxonMobil",
      startDate: language === 'en' ? "August 18, 2023" : "18 agosto 2023",
      status: language === 'en' ? "Ongoing" : "Hasta la actualidad",
    },
    {
      date: "2021 – 2023",
      company: "SICIM Perú, Huamanga - Ayacucho",
      position: language === 'en' ? "Logistics Supervisor" : "Supervisor Logístico",
      project: language === 'en' ? "Maintenance of Camisea Gas Pipeline" : "Mantenimiento del ducto de Gas de Camisea",
      client: "Transportadora de Gas del Perú",
      startDate: language === 'en' ? "December 1, 2021" : "01 diciembre 2021",
      endDate: language === 'en' ? "August 13, 2023" : "13 agosto 2023",
    },
    {
      date: "2017 – 2019",
      company: "SICIM México, Altamira, Tamaulipas, México",
      position: language === 'en' ? "Warehouse Supervisor" : "Jefe de Almacén",
      project: "Gasoducto Sur de Texas – Tuxpan",
      client: "Transcanada",
      startDate: language === 'en' ? "September 19, 2017" : "19 septiembre 2017",
      endDate: language === 'en' ? "August 30, 2019" : "30 agosto 2019",
    },
  ]

  const education = [
    {
      date: "1995 – 2001",
      institution: "Universidad Inca Garcilaso de la Vega, Lima - Perú",
      specialization: language === 'en' ? "Computing and Informatics" : "Computación e Informática",
      period: language === 'en' ? "November 4, 1995 to April 3, 2001" : "04 noviembre 1995 al 03 abril 2001",
      status: language === 'en' ? "Eighth cycle" : "Octavo ciclo",
    },
    {
      date: "2013",
      institution: "Universidad ESAN, Lima - Perú",
      specialization: language === 'en' ? "Operations Management" : "Gerencia de Operaciones",
      period: language === 'en' ? "October 10 to November 14, 2013" : "Del 10 oct. al 14 nov. 2013",
      program: language === 'en' ? "Specialization for Executives" : "Especialización para Ejecutivos",
    },
  ]

  const references = [
    { name: "Stefano Mengozzi", position: "Construction Manager", company: "SICIM Guyana", phone: "+592 623 6556", email: "s.mengozzi@sicim.eu" },
    { name: "Maribel Medina", position: language === 'en' ? "Logistics Manager" : "Gerente Logístico", company: "SICIM Guyana", phone: "+592 620 5361", email: "m.medina@sicim.eu" },
    { name: "Gustavo Falcon", position: language === 'en' ? "Human Resources Manager" : "Jefe de RRHH", company: "SICIM Perú", phone: "+51 984268715", email: "g.falcon@sicim.eu" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-gray-100">
                  {t.title}
                </h1>
                <LanguageSelector />
              </div>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                {t.subtitle}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {t.contactMe}
                </Button>
                <Link href={language === 'en' ? "/cv/Eliot_Millones_Curriculum_Vitae_EN.pdf" : "/cv/Eliot_Millones Curriculum_Vitae.pdf"} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {t.downloadCV}
                  </Button>
                  </Link>
              </div>
            </div>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-square w-80 overflow-hidden rounded-full border-8 border-white dark:border-gray-800 shadow-xl mx-auto">
                <Image
                  alt="Professional portrait of Eliot Millones"
                  src="/images/hero.png"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.personalInfo}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personalInfo.map((item, index) => (
              <Card key={index}>
                <CardContent className="flex items-center p-6">
                  <item.icon className="h-6 w-6 mr-4 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.projects}</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-4 items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{project.position}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{project.company}</p>
                      <p className="text-gray-500">{project.date}</p>
                    </div>
                    {index === 0 && <Badge>{t.ongoing}</Badge>}
                  </div>
                  <div className="mt-4 space-y-2">
                    <p><strong>{t.project}:</strong> {project.project}</p>
                    <p><strong>{t.client}:</strong> {project.client}</p>
                    <p><strong>{t.startDate}:</strong> {project.startDate}</p>
                    {project.endDate && <p><strong>{t.endDate}:</strong> {project.endDate}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.education}</h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-gray-500">{edu.date}</p>
                  <div className="mt-4 space-y-2">
                    <p><strong>{t.specialization}:</strong> {edu.specialization}</p>
                    <p><strong>{t.period}:</strong> {edu.period}</p>
                    {edu.status && <p><strong>{t.status}:</strong> {edu.status}</p>}
                    {edu.program && <p><strong>{t.program}:</strong> {edu.program}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal References Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.personalReferences}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {references.map((ref, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{ref.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{ref.position}</p>
                  <p className="text-gray-500">{ref.company}</p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {ref.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      {ref.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4" />
              Lima, Perú
            </div>
            <div className="flex gap-4">
              <Link href="mailto:eliot70millones@gmail.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://www.linkedin.com/in/eliot-millones-3b40a4a7/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}

