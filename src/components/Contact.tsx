import { useState, FormEvent } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Github, 
  Linkedin, 
  ExternalLink, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email format.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please enter a message of at least 10 characters.';
    }
    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  };

  const mailtoLink = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry / Collaboration'
  )}&body=${encodeURIComponent(
    `From: ${formData.name || 'Visitor'} (${formData.email || 'Email'})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            08. Get In Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Have a project in mind? Let's build something great.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            I'm open to connecting with developers, collaborating on interesting projects, and exploring opportunities to grow my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Communication Channels (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-6">
              <h3 className="text-base font-bold text-white font-heading">
                Direct Contact Information
              </h3>

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-mono">Email Address</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-violet-600/20 text-violet-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-mono">Phone & WhatsApp</div>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors font-mono"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
                  title="Copy phone number to clipboard"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-slate-800/80 space-y-3">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Professional Profiles
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PORTFOLIO_DATA.personal.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between text-xs text-slate-300 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between text-xs text-slate-300 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <h3 className="text-base font-bold text-white font-heading">
                    Send a Message
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Direct Response
                </span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-800/40 space-y-4">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Message Draft Prepared Successfully</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! As this portfolio currently runs in client demonstration mode without a third-party server backend, your draft has been formatted for instant transmission. Click below to launch your email client with your message pre-loaded:
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/30"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email App (mailto:)</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 rounded-xl transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-950/80 border ${
                          formErrors.name ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 placeholder-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-950/80 border ${
                          formErrors.email ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 placeholder-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Internship Opportunity / Project Collaboration"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-950/80 border ${
                        formErrors.subject ? 'border-rose-500' : 'border-slate-800'
                      } text-slate-200 placeholder-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-950/80 border ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-800'
                      } text-slate-200 placeholder-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 resize-none`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Form Submission button + mailto fallback notice */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>

                    <div className="text-[11px] text-slate-500 font-mono">
                      Includes instant direct <a href={mailtoLink} className="text-blue-400 underline hover:text-blue-300">mailto:</a> fallback
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
