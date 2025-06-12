import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Heart,
  Brain,
  Ear,
  Users,
  FileText,
  Download,
  ExternalLink,
  Volume2,
  VolumeX,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <VolumeX className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">NoiseIQ</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#effects" className="text-gray-600 hover:text-gray-900">
                Effects
              </a>
              <a href="#statistics" className="text-gray-600 hover:text-gray-900">
                Statistics
              </a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <a href="#action" className="text-gray-600 hover:text-gray-900">
                Take Action
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="destructive" className="mb-4">
            <AlertTriangle className="w-4 h-4 mr-1" />
            Public Health Crisis
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Hidden Cost of
            <span className="text-red-600 block">Vehicular Honking</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Every honk contributes to a growing noise pollution crisis affecting millions of people worldwide. Learn
            about the serious health impacts and discover how you can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Volume2 className="w-5 h-5 mr-2" />
              Learn the Facts
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-5 h-5 mr-2" />
              Get Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Effects Section */}
      <section id="effects" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Devastating Effects of Honking</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vehicular honking isn't just annoying—it's a serious threat to public health and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-red-700">Cardiovascular Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Increased blood pressure</li>
                  <li>• Higher risk of heart disease</li>
                  <li>• Stress-induced cardiac events</li>
                  <li>• Irregular heart rhythms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-700">Mental Health</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Increased anxiety and stress</li>
                  <li>• Sleep disorders and insomnia</li>
                  <li>• Reduced cognitive function</li>
                  <li>• Depression and irritability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Ear className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-purple-700">Hearing Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Temporary hearing loss</li>
                  <li>• Permanent hearing damage</li>
                  <li>• Tinnitus (ringing in ears)</li>
                  <li>• Auditory processing issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-green-700">Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Reduced quality of life</li>
                  <li>• Impaired communication</li>
                  <li>• Decreased productivity</li>
                  <li>• Community discord</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alarming Statistics</h2>
            <p className="text-xl text-gray-600">The numbers tell a disturbing story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">85+ dB</div>
              <p className="text-gray-600">Average horn volume (above safe levels)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1.6B</div>
              <p className="text-gray-600">People affected by traffic noise globally</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-gray-600">Increase in stress hormones from noise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">12,000</div>
              <p className="text-gray-600">Premature deaths annually from noise pollution</p>
            </div>
          </div>

          <div className="mt-16 bg-red-50 rounded-lg p-8">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Critical Fact</h3>
              <p className="text-lg text-gray-700">
                The World Health Organization considers noise pollution the second-largest environmental health threat
                after air pollution. Vehicular honking is a major contributor to urban noise pollution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Take Action Resources</h2>
            <p className="text-xl text-gray-600">
              Download and use these materials to spread awareness and reduce honking in your community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Printable Signs</CardTitle>
                <CardDescription>
                  Ready-to-print signs with messages like "Please Don't Honk" for your car, home, or business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link
                    href="https://drive.google.com/drive/folders/1DyZjXeW2EFpho92T3Rl5GZn-MBrl0s5a?usp=sharing"
                    target="_blank"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Access PDF Collection
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Community Guidelines</CardTitle>
                <CardDescription>
                  Share these guidelines with your community to promote responsible driving habits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Health Fact Sheets</CardTitle>
                <CardDescription>
                  Educational materials about the health impacts of noise pollution to share with others
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Get Fact Sheets
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">How to Use These Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Download & Print</h4>
                <p className="text-sm text-gray-600">Access our collection of printable materials from Google Drive</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Display & Share</h4>
                <p className="text-sm text-gray-600">Place signs in visible locations and share with your network</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Spread Awareness</h4>
                <p className="text-sm text-gray-600">
                  Educate others about the importance of reducing unnecessary honking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="action" className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every action counts. Help us create quieter, healthier communities by spreading awareness about the harmful
            effects of unnecessary honking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Download className="w-5 h-5 mr-2" />
              Get All Resources
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
              Share NoiseIQ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <VolumeX className="h-6 w-6" />
                <span className="text-xl font-bold">NoiseIQ</span>
              </div>
              <p className="text-gray-400">
                Educating communities about the harmful effects of vehicular honking and promoting quieter, healthier
                environments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#effects" className="hover:text-white">
                    Health Effects
                  </a>
                </li>
                <li>
                  <a href="#statistics" className="hover:text-white">
                    Statistics
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-white">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#action" className="hover:text-white">
                    Take Action
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="https://drive.google.com/drive/folders/1DyZjXeW2EFpho92T3Rl5GZn-MBrl0s5a?usp=sharing"
                    target="_blank"
                    className="hover:text-white flex items-center"
                  >
                    Printable Materials
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Health Fact Sheets
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NoiseIQ. Making communities quieter, one honk at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

