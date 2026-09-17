import { useState } from "react";
import { X, Save, Lock, Check, ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { defaultContent, type SiteContent } from "@/data/epkData";

const ADMIN_PASSWORD = "bhaswati2026";

type SectionKey = keyof SiteContent;

const SECTIONS: { key: SectionKey; label: string }[] = [
  { key: "hero", label: "Hero" },
  { key: "about", label: "About" },
  { key: "music", label: "Music" },
  { key: "photos", label: "Photos" },
  { key: "contact", label: "Contact" },
  { key: "footer", label: "Footer" },
];

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [expanded, setExpanded] = useState<SectionKey | null>("hero");
  const [saving, setSaving] = useState<SectionKey | null>(null);
  const [savedSection, setSavedSection] = useState<SectionKey | null>(null);

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
      loadContent();
    } else {
      setError("Incorrect password");
    }
  }

  async function loadContent() {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("section, data");

      if (error) throw error;
      if (data && data.length > 0) {
        const merged = { ...defaultContent };
        for (const row of data) {
          const section = row.section as SectionKey;
          if (section in merged) {
            merged[section] = { ...merged[section], ...row.data };
          }
        }
        setContent(merged);
      }
    } catch (err) {
      console.error("Failed to load content:", err);
    }
  }

  async function handleSave(section: SectionKey) {
    setSaving(section);
    try {
      const { error } = await supabase
        .from("site_content")
        .upsert(
          { section, data: content[section] },
          { onConflict: "section" }
        );
      if (error) throw error;
      setSavedSection(section);
      setTimeout(() => setSavedSection(null), 2000);
    } catch (err) {
      console.error("Save failed:", err);
      alert("Failed to save. Please try again.");
    } finally {
      setSaving(null);
    }
  }

  function updateField<K extends SectionKey>(
    section: K,
    field: string,
    value: unknown
  ) {
    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  }

  function updateArrayItem(
    section: SectionKey,
    field: string,
    index: number,
    key: string,
    value: string
  ) {
    setContent((prev) => {
      const sectionData = prev[section] as Record<string, unknown>;
      const arr = [...(sectionData[field] as Record<string, unknown>[])];
      arr[index] = { ...arr[index], [key]: value };
      return { ...prev, [section]: { ...sectionData, [field]: arr } };
    });
  }

  function addArrayItem(section: SectionKey, field: string, template: Record<string, unknown>) {
    setContent((prev) => {
      const sectionData = prev[section] as Record<string, unknown>;
      const arr = [...(sectionData[field] as Record<string, unknown>[]), template];
      return { ...prev, [section]: { ...sectionData, [field]: arr } };
    });
  }

  function removeArrayItem(section: SectionKey, field: string, index: number) {
    setContent((prev) => {
      const sectionData = prev[section] as Record<string, unknown>;
      const arr = [...(sectionData[field] as Record<string, unknown>[])];
      arr.splice(index, 1);
      return { ...prev, [section]: { ...sectionData, [field]: arr } };
    });
  }

  if (!authed) {
    return (
      <div className="fixed inset-0 z-[200] bg-bg flex items-center justify-center p-6">
        <button onClick={onClose} className="absolute top-6 right-6 text-secondary hover:text-primary transition-colors">
          <X className="w-6 h-6" />
        </button>
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="w-5 h-5 text-primary" />
            <h1 className="font-display font-bold text-white text-2xl uppercase tracking-tight">
              Admin Panel
            </h1>
          </div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full bg-card border border-border text-white px-4 py-3 text-sm focus:border-primary outline-none mb-3"
          />
          {error && <p className="text-accent text-xs mb-3">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-primary text-primary-fg font-display font-bold uppercase text-sm py-3 tracking-wide transition-colors hover:bg-white"
          >
            Unlock
          </button>
          <p className="text-muted text-[10px] uppercase tracking-wider mt-4 text-center">
            Default password: bhaswati2026
          </p>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-card border border-border text-white px-3 py-2 text-sm focus:border-primary outline-none transition-colors";
  const labelClass = "text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block";

  return (
    <div className="fixed inset-0 z-[200] bg-bg overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-bg/96 backdrop-blur-md border-b border-border z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="font-display font-bold text-white text-xl uppercase tracking-tight">
            Admin Panel
          </h1>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-secondary text-xs uppercase tracking-wider hover:text-primary transition-colors"
            >
              View Site
            </a>
            <button onClick={onClose} className="text-secondary hover:text-primary transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {SECTIONS.map((section) => {
          const isOpen = expanded === section.key;
          return (
            <div key={section.key} className="border border-border mb-4">
              {/* Section header */}
              <button
                onClick={() => setExpanded(isOpen ? null : section.key)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-card transition-colors"
              >
                <span className="font-display font-bold text-white text-sm uppercase tracking-wide">
                  {section.label}
                </span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-muted" /> : <ChevronDown className="w-4 h-4 text-muted" />}
              </button>

              {/* Section content */}
              {isOpen && (
                <div className="border-t border-border p-5 space-y-4">
                  {/* HERO — no button editing */}
                  {section.key === "hero" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>First Name</label>
                          <input className={inputClass} value={content.hero.firstName} onChange={(e) => updateField("hero", "firstName", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Last Name</label>
                          <input className={inputClass} value={content.hero.lastName} onChange={(e) => updateField("hero", "lastName", e.target.value)} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Subtitle</label>
                        <input className={inputClass} value={content.hero.subtitle} onChange={(e) => updateField("hero", "subtitle", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Description</label>
                        <textarea className={inputClass} rows={3} value={content.hero.description} onChange={(e) => updateField("hero", "description", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Background Image URL</label>
                        <input className={inputClass} value={content.hero.backgroundImage} onChange={(e) => updateField("hero", "backgroundImage", e.target.value)} />
                        {content.hero.backgroundImage && (
                          <img src={content.hero.backgroundImage} alt="Preview" className="mt-2 w-full h-32 object-cover border border-border" />
                        )}
                      </div>
                      <p className="text-muted text-[10px] uppercase tracking-wider pt-2 border-t border-border">
                        Buttons are not editable — they are hardcoded for SEO.
                      </p>
                    </>
                  )}

                  {/* ABOUT */}
                  {section.key === "about" && (
                    <>
                      <div>
                        <label className={labelClass}>Heading</label>
                        <input className={inputClass} value={content.about.heading} onChange={(e) => updateField("about", "heading", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Highlight Word (shown in lime)</label>
                        <input className={inputClass} value={content.about.highlightWord} onChange={(e) => updateField("about", "highlightWord", e.target.value)} />
                      </div>
                      {/* Showreel */}
                      <div className="border border-border p-3 space-y-2">
                        <span className="text-muted text-[10px] uppercase tracking-wider">Showreel Video</span>
                        <div>
                          <label className={labelClass}>Showreel Title</label>
                          <input className={inputClass} value={content.about.showreelTitle} onChange={(e) => updateField("about", "showreelTitle", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Showreel YouTube URL</label>
                          <input className={inputClass} value={content.about.showreelUrl} onChange={(e) => updateField("about", "showreelUrl", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Showreel Thumbnail URL</label>
                          <input className={inputClass} value={content.about.showreelThumbnail} onChange={(e) => updateField("about", "showreelThumbnail", e.target.value)} />
                          {content.about.showreelThumbnail && <img src={content.about.showreelThumbnail} alt="Preview" className="mt-2 w-full h-32 object-cover border border-border" />}
                        </div>
                        <div>
                          <label className={labelClass}>Showreel Description</label>
                          <textarea className={inputClass} rows={2} value={content.about.showreelDescription} onChange={(e) => updateField("about", "showreelDescription", e.target.value)} />
                        </div>
                      </div>
                      {/* Paragraphs */}
                      <div>
                        <label className={labelClass}>About Writeup Paragraphs</label>
                        {content.about.paragraphs.map((p, i) => (
                          <div key={i} className="flex gap-2 mb-2">
                            <textarea className={inputClass} rows={3} value={p} onChange={(e) => {
                              const arr = [...content.about.paragraphs];
                              arr[i] = e.target.value;
                              updateField("about", "paragraphs", arr);
                            }} />
                            <button onClick={() => {
                              const arr = [...content.about.paragraphs];
                              arr.splice(i, 1);
                              updateField("about", "paragraphs", arr);
                            }} className="shrink-0 text-accent hover:text-white p-2"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        ))}
                        <button onClick={() => updateField("about", "paragraphs", [...content.about.paragraphs, "New paragraph"])} className="text-primary text-xs uppercase tracking-wider flex items-center gap-1 hover:text-white"><Plus className="w-3 h-3" /> Add Paragraph</button>
                      </div>
                    </>
                  )}

                  {/* MUSIC */}
                  {section.key === "music" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>Heading</label>
                          <input className={inputClass} value={content.music.heading} onChange={(e) => updateField("music", "heading", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Highlight Word</label>
                          <input className={inputClass} value={content.music.highlightWord} onChange={(e) => updateField("music", "highlightWord", e.target.value)} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Showcase Description</label>
                        <textarea className={inputClass} rows={2} value={content.music.showcaseDescription} onChange={(e) => updateField("music", "showcaseDescription", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Showcase Videos</label>
                        {content.music.showcaseVideos.map((video, i) => (
                          <div key={i} className="border border-border p-3 space-y-2 mb-2">
                            <div className="flex justify-between items-center">
                              <span className="text-muted text-[10px] uppercase tracking-wider">Video {i + 1}</span>
                              <button onClick={() => removeArrayItem("music", "showcaseVideos", i)} className="text-accent hover:text-white"><Trash2 className="w-4 h-4" /></button>
                            </div>
                            <input className={inputClass} placeholder="Title" value={video.title} onChange={(e) => updateArrayItem("music", "showcaseVideos", i, "title", e.target.value)} />
                            <input className={inputClass} placeholder="Description" value={video.description} onChange={(e) => updateArrayItem("music", "showcaseVideos", i, "description", e.target.value)} />
                            <input className={inputClass} placeholder="YouTube URL" value={video.url} onChange={(e) => updateArrayItem("music", "showcaseVideos", i, "url", e.target.value)} />
                          </div>
                        ))}
                        <button onClick={() => addArrayItem("music", "showcaseVideos", { title: "New Video", url: "", id: "", thumbnail: "", description: "" })} className="text-primary text-xs uppercase tracking-wider flex items-center gap-1 hover:text-white"><Plus className="w-3 h-3" /> Add Video</button>
                      </div>
                      <div className="border-t border-border pt-4 mt-4">
                        <label className={labelClass}>Releases</label>
                        {content.music.releases.map((release, i) => (
                          <div key={i} className="border border-border p-3 space-y-2 mb-2">
                            <div className="flex justify-between items-center">
                              <span className="text-muted text-[10px] uppercase tracking-wider">Release {i + 1}</span>
                              <button onClick={() => removeArrayItem("music", "releases", i)} className="text-accent hover:text-white"><Trash2 className="w-4 h-4" /></button>
                            </div>
                            <input className={inputClass} placeholder="Title" value={release.title} onChange={(e) => updateArrayItem("music", "releases", i, "title", e.target.value)} />
                            <div className="grid grid-cols-3 gap-2">
                              <select className={inputClass} value={release.type} onChange={(e) => updateArrayItem("music", "releases", i, "type", e.target.value)}>
                                <option value="SINGLE">SINGLE</option>
                                <option value="EP">EP</option>
                                <option value="ALBUM">ALBUM</option>
                              </select>
                              <input className={inputClass} placeholder="Year" value={release.year} onChange={(e) => updateArrayItem("music", "releases", i, "year", e.target.value)} />
                              <input className={inputClass} placeholder="Streams" value={release.streams} onChange={(e) => updateArrayItem("music", "releases", i, "streams", e.target.value)} />
                            </div>
                            <input className={inputClass} placeholder="Cover Image URL" value={release.cover} onChange={(e) => updateArrayItem("music", "releases", i, "cover", e.target.value)} />
                            <div className="grid grid-cols-2 gap-2">
                              <input className={inputClass} placeholder="Link Label" value={release.links[0]?.label || ""} onChange={(e) => {
                                const links = [...release.links];
                                if (links[0]) links[0] = { ...links[0], label: e.target.value };
                                else links[0] = { label: e.target.value, url: "" };
                                updateArrayItem("music", "releases", i, "links", links as unknown as string);
                              }} />
                              <input className={inputClass} placeholder="Link URL" value={release.links[0]?.url || ""} onChange={(e) => {
                                const links = [...release.links];
                                if (links[0]) links[0] = { ...links[0], url: e.target.value };
                                else links[0] = { label: "", url: e.target.value };
                                updateArrayItem("music", "releases", i, "links", links as unknown as string);
                              }} />
                            </div>
                          </div>
                        ))}
                        <button onClick={() => addArrayItem("music", "releases", { title: "New Release", type: "SINGLE", year: "2024", cover: "", streams: "0", links: [{ label: "YouTube", url: "" }], tagColor: "#c8ff00" })} className="text-primary text-xs uppercase tracking-wider flex items-center gap-1 hover:text-white"><Plus className="w-3 h-3" /> Add Release</button>
                      </div>
                    </>
                  )}

                  {/* PHOTOS */}
                  {section.key === "photos" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>Heading</label>
                          <input className={inputClass} value={content.photos.heading} onChange={(e) => updateField("photos", "heading", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Highlight Word</label>
                          <input className={inputClass} value={content.photos.highlightWord} onChange={(e) => updateField("photos", "highlightWord", e.target.value)} />
                        </div>
                      </div>
                      {content.photos.photos.map((photo, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                          <input className={inputClass} placeholder="Image URL" value={photo.src} onChange={(e) => updateArrayItem("photos", "photos", i, "src", e.target.value)} />
                          <input className={inputClass} placeholder="Credit" value={photo.credit} onChange={(e) => updateArrayItem("photos", "photos", i, "credit", e.target.value)} />
                          <button onClick={() => removeArrayItem("photos", "photos", i)} className="shrink-0 text-accent hover:text-white p-2"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                      <button onClick={() => addArrayItem("photos", "photos", { src: "", credit: "New Photo" })} className="text-primary text-xs uppercase tracking-wider flex items-center gap-1 hover:text-white"><Plus className="w-3 h-3" /> Add Photo</button>
                    </>
                  )}

                  {/* CONTACT */}
                  {section.key === "contact" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>Heading</label>
                          <input className={inputClass} value={content.contact.heading} onChange={(e) => updateField("contact", "heading", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Highlight Word</label>
                          <input className={inputClass} value={content.contact.highlightWord} onChange={(e) => updateField("contact", "highlightWord", e.target.value)} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Blurb</label>
                        <textarea className={inputClass} rows={3} value={content.contact.blurb} onChange={(e) => updateField("contact", "blurb", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Booking Email</label>
                        <input className={inputClass} value={content.contact.bookingEmail} onChange={(e) => updateField("contact", "bookingEmail", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Instagram DM URL</label>
                        <input className={inputClass} value={content.contact.instagramDmUrl} onChange={(e) => updateField("contact", "instagramDmUrl", e.target.value)} />
                        <p className="text-muted text-[10px] mt-1">Use format: https://ig.me/m/YOUR_USERNAME</p>
                      </div>
                    </>
                  )}

                  {/* FOOTER */}
                  {section.key === "footer" && (
                    <>
                      <div>
                        <label className={labelClass}>Artist Name</label>
                        <input className={inputClass} value={content.footer.artistName} onChange={(e) => updateField("footer", "artistName", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Subtitle</label>
                        <input className={inputClass} value={content.footer.subtitle} onChange={(e) => updateField("footer", "subtitle", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Social Handle</label>
                        <input className={inputClass} value={content.footer.socialHandle} onChange={(e) => updateField("footer", "socialHandle", e.target.value)} />
                      </div>
                      {content.footer.socials.map((social, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                          <input className={inputClass} placeholder="Platform" value={social.platform} onChange={(e) => updateArrayItem("footer", "socials", i, "platform", e.target.value)} />
                          <input className={inputClass} placeholder="URL" value={social.url} onChange={(e) => updateArrayItem("footer", "socials", i, "url", e.target.value)} />
                          <select className={inputClass} value={social.icon} onChange={(e) => updateArrayItem("footer", "socials", i, "icon", e.target.value)}>
                            <option value="instagram">Instagram</option>
                            <option value="facebook">Facebook</option>
                            <option value="youtube">YouTube</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="spotify">Spotify</option>
                            <option value="apple">Apple Music</option>
                          </select>
                          <button onClick={() => removeArrayItem("footer", "socials", i)} className="shrink-0 text-accent hover:text-white p-2"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                      <button onClick={() => addArrayItem("footer", "socials", { platform: "New", url: "", icon: "instagram" })} className="text-primary text-xs uppercase tracking-wider flex items-center gap-1 hover:text-white mb-4"><Plus className="w-3 h-3" /> Add Social</button>
                      {content.footer.streaming.map((platform, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                          <input className={inputClass} placeholder="Platform" value={platform.platform} onChange={(e) => updateArrayItem("footer", "streaming", i, "platform", e.target.value)} />
                          <input className={inputClass} placeholder="URL" value={platform.url} onChange={(e) => updateArrayItem("footer", "streaming", i, "url", e.target.value)} />
                          <select className={inputClass} value={platform.icon} onChange={(e) => updateArrayItem("footer", "streaming", i, "icon", e.target.value)}>
                            <option value="spotify">Spotify</option>
                            <option value="apple">Apple Music</option>
                            <option value="jiosaavn">JioSaavn</option>
                            <option value="wynk">Wynk</option>
                          </select>
                          <button onClick={() => removeArrayItem("footer", "streaming", i)} className="shrink-0 text-accent hover:text-white p-2"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                      <button onClick={() => addArrayItem("footer", "streaming", { platform: "New", url: "", icon: "spotify" })} className="text-primary text-xs uppercase tracking-wider flex items-center gap-1 hover:text-white"><Plus className="w-3 h-3" /> Add Streaming</button>
                    </>
                  )}

                  {/* Save button */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => handleSave(section.key)}
                      disabled={saving === section.key}
                      className="inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-xs px-4 py-2.5 tracking-wide transition-colors hover:bg-white disabled:opacity-50"
                    >
                      {saving === section.key ? "Saving..." : <><Save className="w-3.5 h-3.5" /> Save</>}
                    </button>
                    {savedSection === section.key && (
                      <span className="inline-flex items-center gap-1 text-primary text-xs uppercase tracking-wider">
                        <Check className="w-3.5 h-3.5" /> Saved
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="border border-border p-4 mt-4">
          <p className="text-muted text-[10px] uppercase tracking-wider mb-1">Tech Rider</p>
          <p className="text-secondary text-xs font-light">The Tech Rider section is not editable via the CMS. It contains fixed technical requirements for venues.</p>
        </div>

        <p className="text-muted text-[10px] uppercase tracking-wider text-center pt-4">
          Changes save to the database and appear on the live site after refresh.
        </p>
      </div>
    </div>
  );
}

