import { FadeIn } from "./FadeIn";

const trustedClients = [
  { name: "EdTech Solutions", type: "EdTech Partner", country: "Rwanda" },
  { name: "ISHVexa", type: "Technology Partner", country: "Rwanda" },
  { name: "Rwanda Coding Academy", type: "Education", country: "Kigali, Rwanda" },
  { name: "Greenhills Academy", type: "International School", country: "Kigali, Rwanda" },
  { name: "Kiyumba TVET", type: "Vocational College", country: "Rwanda" },
  { name: "Ntare-Louis Enlund School", type: "Secondary School", country: "Uganda" },
  { name: "Université du Rwanda", type: "University", country: "Kigali, Rwanda" },
  { name: "AUCA", type: "University", country: "Kigali, Rwanda" },
  { name: "St. Mary's College", type: "Secondary School", country: "Uganda" },
  { name: "INES Ruhengeri", type: "Institute", country: "Musanze, Rwanda" },
  { name: "Kaiserslautern School", type: "International School", country: "Tanzania" },
  { name: "Hillcrest Secondary", type: "Secondary School", country: "Nairobi, Kenya" },
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Trusted by schools, institutions &amp; technology partners</p>
          <p className="text-gray-500 text-sm">across Rwanda and East Africa</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {trustedClients.map((client) => (
              <div key={client.name} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 font-black text-xs">{client.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-xs leading-tight truncate">{client.name}</div>
                  <div className="text-gray-400 text-[10px] truncate">{client.country}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
