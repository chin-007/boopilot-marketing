import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom Aesthetics",
    text: "I was paying an agency ₹35k/month and getting terrible leads. Boopilot replaced them completely in 48 hours. The automated DM feature alone has doubled our bookings.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=facearea&facepad=2",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Real Estate Broker",
    text: "The ability to turn my winning organic posts into Meta ads automatically without having to log into Ads Manager is a game changer. I've never seen ROAS like this.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=facearea&facepad=2",
    rating: 5,
  },
  {
    name: "Dr. Ananya Singh",
    role: "Dental Clinic Owner",
    text: "I don't have time to write captions or post on Google Business. Boopilot does everything while I am actually treating patients. Best ₹4k I spend every month.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=facearea&facepad=2",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative z-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-indigo-100 text-indigo-700 border-0 mb-4 px-3 py-1 font-bold uppercase tracking-wider text-[10px] md:text-xs">
            Wall of Love
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">
            Loved by 500+ Business Owners.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium px-2">
            Don't just take our word for it. See what happens when you fire your agency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="p-6 md:p-8 rounded-[1.5rem] flex flex-col bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm md:text-base font-medium mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-5 mt-auto">
                <div className="relative w-12 h-12 shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full border-2 border-white shadow-md object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
