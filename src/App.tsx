import { useEffect, useRef, useState } from "react";

const photos = {
  hero: "https://images.unsplash.com/photo-1694366454450-7979697bab21?auto=format&fit=crop&w=2000&q=88",
  courtyard:
    "https://images.unsplash.com/photo-1596901224267-67ca38199090?auto=format&fit=crop&w=1200&q=85",
  detail:
    "https://images.unsplash.com/photo-1777707461015-096e3de3604c?auto=format&fit=crop&w=1000&q=85",
  room1: "/assets/nivasa-deluxe.jpg",
  room2: "/assets/nivasa-superior.jpg",
  room3: "/assets/nivasa-double-single.jpg",
  dining:
    "https://images.unsplash.com/photo-1744776411221-702f2848b0b2?auto=format&fit=crop&w=1200&q=85",
  fort: "https://images.unsplash.com/photo-1636788989843-c1815de9c6ef?auto=format&fit=crop&w=1200&q=85",
  hall: "https://images.unsplash.com/photo-1641803188474-f6e23844b98f?auto=format&fit=crop&w=1200&q=85",
  architecture:
    "https://images.unsplash.com/photo-1777707461013-f84a2376498e?auto=format&fit=crop&w=1200&q=85",
};

const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1694366454450-7979697bab21?auto=format&fit=crop&w=2000&q=88",
    title: "Timeless Rajasthani Hospitality",
    caption: "Suvarnagiri Heritage Sanctuary",
  },
  {
    url: "https://images.unsplash.com/photo-1596901224267-67ca38199090?auto=format&fit=crop&w=2000&q=88",
    title: "Sandstone Arches & Courtyards",
    caption: "Carved Jharokhas & Shaded Patios",
  },
  {
    url: "https://images.unsplash.com/photo-1636788989843-c1815de9c6ef?auto=format&fit=crop&w=2000&q=88",
    title: "Golden Dusk Over Suvarnagiri",
    caption: "Ancient Ramparts of Jalore",
  },
  {
    url: "https://images.unsplash.com/photo-1641803188474-f6e23844b98f?auto=format&fit=crop&w=2000&q=88",
    title: "Chambers of Royal Comfort",
    caption: "Grand Chandeliers & Artisanal Craft",
  },
  {
    url: "https://images.unsplash.com/photo-1777707461013-f84a2376498e?auto=format&fit=crop&w=2000&q=88",
    title: "Warm Marwari Welcome",
    caption: "An Intimate Boutique Sanctuary",
  },
];

type IconName =
  | "calendar"
  | "users"
  | "concierge"
  | "wifi"
  | "dining"
  | "parking"
  | "compass"
  | "celebration"
  | "arrow"
  | "pin"
  | "train"
  | "plane"
  | "close"
  | "menu"
  | "chevron"
  | "check"
  | "tag"
  | "shield";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    calendar: (
      <>
        <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-4 2-7 6-7s6 3 6 7M16 5a3 3 0 0 1 0 6M17 14c2.5.5 4 2.5 4 6" />
      </>
    ),
    concierge: (
      <>
        <path d="M4 17h16M6 17a6 6 0 0 1 12 0M12 11V8" />
        <circle cx="12" cy="6" r="2" />
      </>
    ),
    wifi: (
      <>
        <path d="M3 9a14 14 0 0 1 18 0M6 13a9 9 0 0 1 12 0M9.5 17a4 4 0 0 1 5 0" />
        <circle cx="12" cy="20" r=".7" fill="currentColor" />
      </>
    ),
    dining: (
      <>
        <path d="M7 3v8M4 3v5c0 2 6 2 6 0V3M7 11v10M16 3v18M16 3c4 2 5 8 0 10" />
      </>
    ),
    parking: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    celebration: (
      <>
        <path d="m5 20 3-10 6 6-9 4ZM14 4l1 3M19 7l-3 1M18 13l3 1M10 3l2 2" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    train: (
      <>
        <rect x="5" y="3" width="14" height="15" rx="3" />
        <path d="M5 10h14M8 21l2-3M16 21l-2-3M9 6h6" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
      </>
    ),
    plane: (
      <>
        <path d="m22 2-8 20-3-9-9-3 20-8ZM11 13l4-4" />
      </>
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
    menu: (
      <>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </>
    ),
    chevron: (
      <>
        <path d="m8 10 4 4 4-4" />
      </>
    ),
    check: (
      <>
        <path d="M20 6 9 17l-5-5" />
      </>
    ),
    tag: (
      <>
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
        <path d="M7 7h.01" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const rooms = [
  {
    name: "Nivasa Deluxe",
    category: "deluxe",
    kicker: "Quietly considered",
    image: photos.room1,
    size: "310 sq. ft.",
    bed: "King Bed",
    guests: "2 Guests",
    view: "Courtyard view",
    price: "₹4,800",
  },
  {
    name: "Nivasa Superior",
    category: "superior",
    kicker: "Quietly considered",
    image: photos.room2,
    size: "380 sq. ft.",
    bed: "King Bed",
    guests: "2 Guests",
    view: "City & garden view",
    price: "₹6,200",
  },
  {
    name: "Nivasa Double & Single Bed",
    category: "family",
    kicker: "Family & group stay",
    image: photos.room3,
    size: "480 sq. ft.",
    bed: "1 Double + 1 Single Bed",
    guests: "3 Guests",
    view: "City & garden view",
    price: "₹7,200",
  },
];

const gallery = [
  {
    src: photos.hero,
    category: "architecture",
    alt: "Heritage hotel reflected in a tranquil pool",
  },
  { src: photos.room1, category: "chambers", alt: "Nivasa Deluxe room chamber" },
  { src: photos.room2, category: "chambers", alt: "Nivasa Superior room chamber" },
  { src: photos.room3, category: "chambers", alt: "Nivasa Double & Single Bed chamber" },
  { src: photos.dining, category: "dining", alt: "Elegant table set for dinner" },
  { src: photos.courtyard, category: "courtyards", alt: "Rajasthani palace courtyard" },
  {
    src: photos.architecture,
    category: "architecture",
    alt: "Ornate Rajasthani sandstone architecture",
  },
];

const bookingRooms = [
  {
    id: "deluxe",
    name: "Nivasa Deluxe",
    badge: "Few Rooms Available",
    image: photos.room1,
    size: "310 sq ft",
    guests: "Up to 2 guests",
    view: "Courtyard View",
    description:
      "The Nivasa Deluxe offers a serene heritage escape surrounded by lush greenery, featuring comfortable interiors, charming aesthetics, and a tranquil ambience for a relaxing stay.",
    amenities: [
      "Wi-Fi Facility",
      "Television",
      "Tea/coffee Maker",
      "Bottled Water",
      "Air Conditioning",
      "+5 more",
    ],
    plans: [
      {
        id: "deluxe-cp",
        name: "Room with breakfast",
        originalPrice: 5600,
        price: 4800,
      },
      {
        id: "deluxe-map",
        name: "Room with breakfast, lunch or dinner",
        originalPrice: 6800,
        price: 5800,
      },
      {
        id: "deluxe-ap",
        name: "Room with all meals",
        originalPrice: 7900,
        price: 6800,
      },
    ],
  },
  {
    id: "superior",
    name: "Nivasa Superior",
    badge: "Few Rooms Available",
    image: photos.room2,
    size: "380 sq ft",
    guests: "Up to 2 guests",
    view: "City & Garden View",
    description:
      "Experience the perfect harmony of contemporary luxury and palace heritage in our Nivasa Superior rooms. Designed for today's modern traveller with premium hardwood flooring and generous natural light.",
    amenities: [
      "Wi-Fi Facility",
      "Television",
      "Tea/coffee Maker",
      "Bottled Water",
      "Air Conditioning",
      "+5 more",
    ],
    plans: [
      {
        id: "superior-cp",
        name: "Room with breakfast",
        originalPrice: 7200,
        price: 6200,
      },
      {
        id: "superior-map",
        name: "Room with breakfast, lunch or dinner",
        originalPrice: 8400,
        price: 7200,
      },
      {
        id: "superior-ap",
        name: "Room with all meals",
        originalPrice: 9500,
        price: 8200,
      },
    ],
  },
  {
    id: "family",
    name: "Nivasa Double & Single Bed",
    badge: "Few Rooms Available",
    image: photos.room3,
    size: "480 sq ft",
    guests: "Up to 3 guests",
    view: "City & Courtyard View",
    description:
      "Ideal for families and traveling companions, featuring one double bed and one single bed with generous lounging room, spacious vanity desk, and modern Marwari touches.",
    amenities: [
      "1 Double + 1 Single Bed",
      "Wi-Fi Facility",
      "Television",
      "Tea/coffee Maker",
      "Bottled Water",
      "+5 more",
    ],
    plans: [
      {
        id: "family-cp",
        name: "Room with breakfast",
        originalPrice: 8500,
        price: 7200,
      },
      {
        id: "family-map",
        name: "Room with breakfast, lunch or dinner",
        originalPrice: 9800,
        price: 8400,
      },
      {
        id: "family-ap",
        name: "Room with all meals",
        originalPrice: 11200,
        price: 9600,
      },
    ],
  },
];

function formatBEDate(dateStr: string) {
  const d = new Date(`${dateStr}T00:00:00`);
  return {
    short: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "2-digit" }),
    full: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
  };
}

function LotusMark() {
  return (
    <div className="lotus-mark" aria-hidden="true">
      <span>◆</span>
      <i />
      <span>◆</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [checkIn, setCheckIn] = useState("2026-11-19");
  const [checkOut, setCheckOut] = useState("2026-11-20");
  const [guestOpen, setGuestOpen] = useState(false);
  const [beGuestOpen, setBeGuestOpen] = useState(false);
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [roomFilter, setRoomFilter] = useState("all");
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes("/checkout") || hash === "#checkout") {
        return "/checkout";
      }
      if (path.includes("/availability") || hash === "#availability") {
        return "/availability";
      }
    }
    return "/";
  });
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const [bookingOpen, setBookingOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      return path.includes("/availability") || hash === "#availability";
    }
    return false;
  });
  const [bookingError, setBookingError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<{
    roomId: string;
    roomName: string;
    planId: string;
    planName: string;
    price: number;
  } | null>(null);
  const [promoInput, setPromoInput] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [guestForm, setGuestForm] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [checkoutForm, setCheckoutForm] = useState({
    title: "Mr.",
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phone: "9876543210",
    dob: "",
    country: "India",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    gstNumber: "",
    specialRequests: "",
    agreeTerms: true,
    agreeCancellation: true,
  });
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingId: string;
    roomName: string;
    planName: string;
    checkIn: string;
    checkOut: string;
    total: number;
    guestName: string;
    email?: string;
    phone?: string;
  } | null>(null);
  const bookingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredGallery =
    galleryFilter === "all" ? gallery : gallery.filter((item) => item.category === galleryFilter);

  // Synchronize route with browser URL, query parameters, and back/forward history
  useEffect(() => {
    if (typeof window === "undefined") return;

    const parseUrl = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);

      const qIn = params.get("checkIn");
      const qOut = params.get("checkOut");
      const qRoom = params.get("room");
      const qPlan = params.get("plan");
      const qAdults = params.get("adults");
      const qRooms = params.get("rooms");
      const qChildren = params.get("children");

      if (qIn) setCheckIn(qIn);
      if (qOut) setCheckOut(qOut);
      if (qAdults) setGuests((g) => ({ ...g, adults: Math.max(1, parseInt(qAdults) || 1) }));
      if (qRooms) setGuests((g) => ({ ...g, rooms: Math.max(1, parseInt(qRooms) || 1) }));
      if (qChildren) setGuests((g) => ({ ...g, children: Math.max(0, parseInt(qChildren) || 0) }));

      let matched: {
        roomId: string;
        roomName: string;
        planId: string;
        planName: string;
        price: number;
      } | null = null;

      if (qRoom) {
        const match = bookingRooms.find(
          (r) => r.id === qRoom.toLowerCase() || r.name.toLowerCase().includes(qRoom.toLowerCase())
        );
        if (match) {
          const matchedPlan = qPlan
            ? match.plans.find((p) => p.id === qPlan) || match.plans[0]
            : match.plans[0];
          matched = {
            roomId: match.id,
            roomName: match.name,
            planId: matchedPlan.id,
            planName: matchedPlan.name,
            price: matchedPlan.price,
          };
          setSelectedPlan(matched);
        }
      }

      const knownSections = ["story", "accommodations", "dining", "experiences", "gallery", "contact"];
      const matchedSection = knownSections.find(
        (sec) =>
          path.endsWith(`/${sec}`) ||
          path.endsWith(`/${sec}/`) ||
          path.includes(`/${sec}/`) ||
          hash === `#${sec}`
      );

      const isCheckout = path.includes("/checkout") || hash === "#checkout";
      const isAvailability = path.includes("/availability") || hash === "#availability";

      if (isCheckout) {
        setCurrentRoute("/checkout");
        setBookingOpen(false);
        if (!selectedPlan && !matched) {
          setSelectedPlan({
            roomId: bookingRooms[0].id,
            roomName: bookingRooms[0].name,
            planId: bookingRooms[0].plans[0].id,
            planName: bookingRooms[0].plans[0].name,
            price: bookingRooms[0].plans[0].price,
          });
        }
      } else if (isAvailability) {
        setCurrentRoute("/availability");
        setBookingOpen(true);
      } else {
        setCurrentRoute("/");
        setBookingOpen(false);
        setCheckoutOpen(false);
        if (matchedSection) {
          setTimeout(() => {
            const el = document.getElementById(matchedSection);
            el?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else if (hash && hash !== "#top") {
          setTimeout(() => {
            const el = document.getElementById(hash.replace("#", ""));
            el?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    parseUrl();

    window.addEventListener("popstate", parseUrl);
    return () => window.removeEventListener("popstate", parseUrl);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
        if (currentRoute === "/checkout") {
          navigateToAvailability();
        } else if (bookingOpen || currentRoute === "/availability") {
          navigateToHome();
        }
        setMenuOpen(false);
      }
      if (lightbox !== null && event.key === "ArrowRight")
        setLightbox((lightbox + 1) % filteredGallery.length);
      if (lightbox !== null && event.key === "ArrowLeft")
        setLightbox((lightbox - 1 + filteredGallery.length) % filteredGallery.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, filteredGallery.length, bookingOpen, currentRoute]);

  // Scroll reveal IntersectionObserver to trigger luxurious entrance animations
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    const elements = document.querySelectorAll(".reveal, .reveal-up, .reveal-scale");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentRoute, roomFilter, galleryFilter]);

  const navigateToAvailability = (roomName?: string) => {
    setBookingError("");
    setMenuOpen(false);
    let chosenRoom = selectedPlan;
    if (roomName) {
      const match = bookingRooms.find((r) => r.name === roomName) || bookingRooms[0];
      chosenRoom = {
        roomId: match.id,
        roomName: match.name,
        planId: match.plans[0].id,
        planName: match.plans[0].name,
        price: match.plans[0].price,
      };
      setSelectedPlan(chosenRoom);
    }
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests.adults !== 2) params.set("adults", String(guests.adults));
    if (guests.rooms !== 1) params.set("rooms", String(guests.rooms));
    if (guests.children > 0) params.set("children", String(guests.children));
    if (chosenRoom) {
      params.set("room", chosenRoom.roomId);
      params.set("plan", chosenRoom.planId);
    }

    const newUrl = `/availability${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.pushState({ page: "availability" }, "", newUrl);
    setCurrentRoute("/availability");
    setBookingOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToCheckout = (chosenPlan?: typeof selectedPlan) => {
    setBookingError("");
    setMenuOpen(false);
    const plan =
      chosenPlan ||
      selectedPlan || {
        roomId: bookingRooms[0].id,
        roomName: bookingRooms[0].name,
        planId: bookingRooms[0].plans[0].id,
        planName: bookingRooms[0].plans[0].name,
        price: bookingRooms[0].plans[0].price,
      };
    setSelectedPlan(plan);
    setBookingOpen(false);
    setCurrentRoute("/checkout");

    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests.adults !== 2) params.set("adults", String(guests.adults));
    if (guests.rooms !== 1) params.set("rooms", String(guests.rooms));
    if (guests.children > 0) params.set("children", String(guests.children));
    if (plan) {
      params.set("room", plan.roomId);
      params.set("plan", plan.planId);
    }

    const newUrl = `/checkout${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.pushState({ page: "checkout" }, "", newUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSection = (sectionId: string) => {
    setMenuOpen(false);
    setBookingOpen(false);
    setCheckoutOpen(false);
    setConfirmedBooking(null);
    setCurrentRoute("/");

    const targetUrl = `/${sectionId}`;
    window.history.pushState({ page: sectionId }, "", targetUrl);

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  };

  const navigateToHome = (sectionId?: string) => {
    if (sectionId) {
      navigateToSection(sectionId);
      return;
    }
    setMenuOpen(false);
    setBookingOpen(false);
    setCheckoutOpen(false);
    setConfirmedBooking(null);
    setCurrentRoute("/");

    window.history.pushState({ page: "home" }, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateDates = (newIn?: string, newOut?: string) => {
    const inVal = newIn ?? checkIn;
    const outVal = newOut ?? checkOut;
    if (newIn) setCheckIn(newIn);
    if (newOut) setCheckOut(newOut);
    if (currentRoute === "/availability") {
      const params = new URLSearchParams(window.location.search);
      params.set("checkIn", inVal);
      params.set("checkOut", outVal);
      window.history.replaceState({ page: "availability" }, "", `/availability?${params.toString()}`);
    }
  };

  const scrollToBooking = () => {
    setMenuOpen(false);
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => bookingRef.current?.querySelector("input")?.focus(), 700);
  };

  const checkAvailability = () => {
    if (!checkIn || !checkOut || new Date(checkOut) <= new Date(checkIn)) {
      setBookingError("Please choose a check-out date after your check-in date.");
      return;
    }
    setBookingError("");
    navigateToAvailability();
  };

  const adjustGuest = (key: keyof typeof guests, delta: number) => {
    const minimum = key === "children" ? 0 : 1;
    setGuests((current) => ({ ...current, [key]: Math.max(minimum, current[key] + delta) }));
  };

  useEffect(() => {
    if (bookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  const checkInDate = new Date(`${checkIn}T00:00:00`);
  const checkOutDate = new Date(`${checkOut}T00:00:00`);
  const rawDiff = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
  const nights = Number.isNaN(rawDiff) || rawDiff < 1 ? 1 : rawDiff;

  const tariff = selectedPlan ? selectedPlan.price * nights * guests.rooms : 0;
  const discount = promoApplied ? Math.round(tariff * 0.1) : 0;
  const netTariff = tariff - discount;
  const taxes = netTariff > 0 ? Math.round(netTariff * 0.12) : 0;
  const totalPayable = netTariff + taxes;

  const togglePlan = (
    roomId: string,
    roomName: string,
    plan: { id: string; name: string; price: number }
  ) => {
    if (selectedPlan?.planId === plan.id) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan({
        roomId,
        roomName,
        planId: plan.id,
        planName: plan.name,
        price: plan.price,
      });
    }
  };

  const applyPromo = () => {
    if (
      promoInput.trim().toUpperCase() === "NIVASA10" ||
      promoInput.trim().toUpperCase() === "DIRECT"
    ) {
      setPromoApplied(true);
      setPromoOpen(false);
    } else {
      alert("Invalid promo code. You can use NIVASA10 for 10% direct discount.");
    }
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestForm.name || !guestForm.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    const text = `*HOTEL NIVASA RESERVATION REQUEST*%0A%0A*Guest Name:* ${guestForm.name}%0A*Phone:* ${guestForm.phone}%0A*Email:* ${guestForm.email || "Not provided"}%0A*Room:* ${selectedPlan?.roomName}%0A*Plan:* ${selectedPlan?.planName}%0A*Check-In:* ${formatBEDate(checkIn).full} (02:00 PM)%0A*Check-Out:* ${formatBEDate(checkOut).full} (11:00 AM)%0A*Nights:* ${nights}%0A*Guests:* ${guests.adults} Adults, ${guests.children} Children (${guests.rooms} Room)%0A*Total Payable:* ₹${totalPayable.toLocaleString("en-IN")}%0A*Special Requests:* ${guestForm.notes || "None"}`;
    window.open(`https://wa.me/918778085139?text=${text}`, "_blank");
    setConfirmedBooking({
      bookingId: `NIV-${Math.floor(100000 + Math.random() * 900000)}`,
      roomName: selectedPlan?.roomName || "",
      planName: selectedPlan?.planName || "",
      checkIn,
      checkOut,
      total: totalPayable,
      guestName: guestForm.name,
    });
  };

  const handleHotelConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestForm.name || !guestForm.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setConfirmedBooking({
      bookingId: `NIV-${Math.floor(100000 + Math.random() * 900000)}`,
      roomName: selectedPlan?.roomName || "",
      planName: selectedPlan?.planName || "",
      checkIn,
      checkOut,
      total: totalPayable,
      guestName: guestForm.name,
    });
  };

  const activePlan =
    selectedPlan || {
      roomId: bookingRooms[0].id,
      roomName: bookingRooms[0].name,
      planId: bookingRooms[0].plans[0].id,
      planName: bookingRooms[0].plans[0].name,
      price: bookingRooms[0].plans[0].price,
    };

  const checkoutTariff = activePlan.price * nights * guests.rooms;
  const checkoutDiscount = promoApplied ? Math.round(checkoutTariff * 0.1) : 0;
  const checkoutNet = checkoutTariff - checkoutDiscount;
  const checkoutTaxes = checkoutNet > 0 ? Math.round(checkoutNet * 0.12) : 0;
  const checkoutTotal = checkoutNet + checkoutTaxes;
  const checkoutEmi = Math.round(checkoutTotal / 12);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutForm.firstName.trim() || !checkoutForm.lastName.trim()) {
      alert("Please provide your first and last name.");
      return;
    }
    if (!checkoutForm.email.trim() || !checkoutForm.phone.trim()) {
      alert("Please provide your email and phone number.");
      return;
    }
    if (!checkoutForm.agreeTerms || !checkoutForm.agreeCancellation) {
      alert("Please accept the terms and cancellation policy to proceed.");
      return;
    }

    const bookingId = `NIV-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBooking({
      bookingId,
      roomName: activePlan.roomName,
      planName: activePlan.planName,
      checkIn,
      checkOut,
      total: checkoutTotal,
      guestName: `${checkoutForm.title} ${checkoutForm.firstName} ${checkoutForm.lastName}`.trim(),
      email: checkoutForm.email,
      phone: checkoutForm.phone,
    });
  };

  const handleCheckoutWhatsApp = () => {
    const text = `*HOTEL NIVASA RESERVATION INQUIRY*%0A%0A*Guest Name:* ${checkoutForm.title} ${checkoutForm.firstName} ${checkoutForm.lastName}%0A*Phone:* ${checkoutForm.phone}%0A*Email:* ${checkoutForm.email}%0A*Location:* ${checkoutForm.city}, ${checkoutForm.state}, ${checkoutForm.country}%0A*Room:* ${activePlan.roomName}%0A*Plan:* ${activePlan.planName}%0A*Check-In:* ${formatBEDate(checkIn).full} (02:00 PM)%0A*Check-Out:* ${formatBEDate(checkOut).full} (11:00 AM)%0A*Nights:* ${nights}%0A*Guests:* ${guests.adults} Adults, ${guests.children} Children (${guests.rooms} Room)%0A*Total Payable:* ₹${checkoutTotal.toLocaleString("en-IN")}%0A*GSTIN:* ${checkoutForm.gstNumber || "N/A"}%0A*Special Requests:* ${checkoutForm.specialRequests || "None"}`;
    window.open(`https://wa.me/918778085139?text=${text}`, "_blank");
  };

  // Dedicated WelcomHeritage Checkout Page matching uploaded reference
  if (currentRoute === "/checkout") {
    return (
      <div className="co-page-wrapper">
        {/* Top bar matching WelcomHeritage screenshot */}
        <header className="co-topbar">
          <div className="co-topbar-inner">
            <button
              className="co-back-btn"
              onClick={() => navigateToAvailability()}
              aria-label="Back to selection"
            >
              <Icon name="arrow" size={16} /> Back to Selection
            </button>

            <div
              className="co-logo-container"
              onClick={() => navigateToHome()}
              title="Hotel Nivasa"
            >
              <img
                src="/assets/hotel_nivasa_logo_transparent.png"
                alt="Hotel Nivasa"
                className="co-logo-img"
              />
            </div>

            <button
              className="co-hotel-page-link"
              onClick={() => navigateToHome()}
            >
              Hotel page
            </button>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="co-container">
          <div className="co-layout-grid">
            {/* Left Column: Guest Information & Agreements */}
            <div className="co-form-column">
              <h1 className="co-page-heading">Guest Information</h1>

              <form onSubmit={handleCheckoutSubmit}>
                {/* Personal Details Card */}
                <div className="co-card">
                  {/* TITLE * */}
                  <div className="co-field">
                    <label className="co-field-label">TITLE *</label>
                    <select
                      className="co-select"
                      value={checkoutForm.title}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, title: e.target.value })}
                      required
                    >
                      <option value="Select Title" disabled>Select Title</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>

                  {/* FIRST NAME * & LAST NAME * */}
                  <div className="co-row-2">
                    <div className="co-field">
                      <label className="co-field-label">FIRST NAME *</label>
                      <input
                        type="text"
                        className="co-input"
                        placeholder="Jane"
                        required
                        value={checkoutForm.firstName}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, firstName: e.target.value })}
                      />
                    </div>
                    <div className="co-field">
                      <label className="co-field-label">LAST NAME *</label>
                      <input
                        type="text"
                        className="co-input"
                        placeholder="Doe"
                        required
                        value={checkoutForm.lastName}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* EMAIL ADDRESS * */}
                  <div className="co-field">
                    <label className="co-field-label">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className="co-input"
                      placeholder="jane.doe@example.com"
                      required
                      value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                    />
                  </div>

                  {/* PHONE NUMBER * & DATE OF BIRTH */}
                  <div className="co-row-2">
                    <div className="co-field">
                      <label className="co-field-label">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        className="co-input"
                        placeholder="9876543210"
                        required
                        value={checkoutForm.phone}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                      />
                    </div>
                    <div className="co-field">
                      <label className="co-field-label">DATE OF BIRTH</label>
                      <input
                        type="date"
                        className="co-input"
                        value={checkoutForm.dob}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, dob: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* COUNTRY * & CITY * */}
                  <div className="co-row-2">
                    <div className="co-field">
                      <label className="co-field-label">COUNTRY *</label>
                      <select
                        className="co-select"
                        value={checkoutForm.country}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, country: e.target.value })}
                        required
                      >
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                      </select>
                    </div>
                    <div className="co-field">
                      <label className="co-field-label">CITY *</label>
                      <input
                        type="text"
                        className="co-input"
                        placeholder="Mumbai"
                        required
                        value={checkoutForm.city}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* STATE & PINCODE */}
                  <div className="co-row-2">
                    <div className="co-field">
                      <label className="co-field-label">STATE</label>
                      <input
                        type="text"
                        className="co-input"
                        placeholder="Maharashtra"
                        value={checkoutForm.state}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, state: e.target.value })}
                      />
                    </div>
                    <div className="co-field">
                      <label className="co-field-label">PINCODE</label>
                      <input
                        type="text"
                        className="co-input"
                        placeholder="400001"
                        value={checkoutForm.pincode}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* GST NUMBER (OPTIONAL) */}
                  <div className="co-field">
                    <label className="co-field-label">GST NUMBER (OPTIONAL)</label>
                    <input
                      type="text"
                      className="co-input"
                      placeholder="Enter GSTIN"
                      value={checkoutForm.gstNumber}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, gstNumber: e.target.value })}
                    />
                  </div>

                  {/* Special Requests (Optional) */}
                  <div className="co-field" style={{ marginBottom: 0 }}>
                    <label className="co-field-label">
                      Special Requests
                      <small>(Optional)</small>
                    </label>
                    <textarea
                      rows={3}
                      className="co-textarea"
                      placeholder="e.g., High floor, early check-in, cot needed..."
                      value={checkoutForm.specialRequests}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, specialRequests: e.target.value })}
                    />
                  </div>
                </div>

                {/* 2. Terms and Condition */}
                <div className="co-policy-box">
                  <div className="co-card-title">2. Terms and Condition</div>
                  <label className="co-checkbox-row">
                    <input
                      type="checkbox"
                      checked={checkoutForm.agreeTerms}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, agreeTerms: e.target.checked })}
                      required
                    />
                    <span className="co-checkbox-text">
                      Yes, I agree with Hotel Nivasa <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Hotel Nivasa Privacy Policy:\nWe respect your personal privacy. Guest data is securely stored and never shared with third parties except for statutory local verification requirements."); }}>privacy policy</a>
                    </span>
                  </label>
                </div>

                {/* 3. Cancellation Policy */}
                <div className="co-policy-box">
                  <div className="co-card-title">3. Cancellation Policy</div>
                  <label className="co-checkbox-row">
                    <input
                      type="checkbox"
                      checked={checkoutForm.agreeCancellation}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, agreeCancellation: e.target.checked })}
                      required
                    />
                    <span className="co-checkbox-text">
                      Yes, I agree with Hotel Nivasa <a href="#cancellation" onClick={(e) => { e.preventDefault(); alert("Hotel Nivasa Cancellation Policy:\n• Free cancellation up to 48 hours prior to check-in (02:00 PM).\n• Cancellations made within 48 hours or no-shows are subject to a 1 night tariff charge."); }}>cancellation policy</a>
                    </span>
                  </label>
                  <div className="co-policy-disclaimer">
                    By clicking on the button, I acknowledge and agree that above information is accurate and that my reservation will be subject to the Hotel Booking Terms and Policies.
                  </div>
                </div>

                {/* Pay Split Strip matching screenshot */}
                <div className="co-pay-strip">
                  <div className="co-pay-now-text">
                    Pay now (100%): ₹{checkoutTotal.toLocaleString("en-IN")}.00
                  </div>
                  <div className="co-balance-text">
                    Balance payable at hotel: ₹0.00
                  </div>
                </div>

                {/* Confirm & Pay Button */}
                <button
                  type="submit"
                  className="co-confirm-button"
                  disabled={!checkoutForm.agreeTerms || !checkoutForm.agreeCancellation}
                >
                  Confirm & Pay
                </button>

                <div className="co-guarantee-note">
                  Your payment will be processed securely. You'll receive a confirmation email immediately.
                </div>

                <div className="co-whatsapp-action">
                  <button
                    type="button"
                    className="co-whatsapp-action-btn"
                    onClick={handleCheckoutWhatsApp}
                  >
                    💬 Or Confirm Directly with Front Desk on WhatsApp (+91 87780 85139)
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: STAY DETAILS Sidebar matching screenshot */}
            <aside className="co-sidebar" aria-label="Stay Details">
              <div className="co-sidebar-title">STAY DETAILS</div>
              <div className="co-hotel-name">
                🏨 Hotel Nivasa, Jalore
              </div>

              {/* Check-In / Nights / Check-Out grid */}
              <div className="co-stay-dates-grid">
                <div className="co-stay-date-col">
                  <small>CHECK-IN</small>
                  <strong>{formatBEDate(checkIn).short}</strong>
                  <span>From 02:00 PM</span>
                </div>

                <div className="co-stay-meta-pill">
                  • {nights} Night{nights > 1 ? "s" : ""}<br />
                  {guests.rooms} Room(s)<br />
                  {guests.adults + guests.children} Guest(s)
                </div>

                <div className="co-stay-date-col" style={{ textAlign: "right" }}>
                  <small>CHECK-OUT</small>
                  <strong>{formatBEDate(checkOut).short}</strong>
                  <span>By 11:00 AM</span>
                </div>
              </div>

              <div className="co-divider" />

              {/* Selected Rooms Section */}
              <div className="co-sec-label">SELECTED ROOMS</div>
              <div className="co-selected-room-line">
                <div>
                  <b>1 x {activePlan.roomName}</b>
                  <small>{guests.adults} Adult(s){guests.children ? `, ${guests.children} Child(ren)` : ""}</small>
                </div>
                <div className="co-selected-room-price">
                  ₹{checkoutTariff.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="co-divider" />

              {/* Pricing Rows */}
              <div className="co-price-row">
                <span>Tariff for {nights} Night{nights > 1 ? "(s)" : ""}</span>
                <span>₹{checkoutTariff.toLocaleString("en-IN")}</span>
              </div>

              {promoApplied && (
                <div className="co-price-row" style={{ color: "#16a34a" }}>
                  <span>Promo Discount (10%)</span>
                  <span>−₹{checkoutDiscount.toLocaleString("en-IN")}</span>
                </div>
              )}

              <div className="co-price-row">
                <span>Taxes</span>
                <span>₹{checkoutTaxes.toLocaleString("en-IN")}</span>
              </div>

              <div className="co-price-row total">
                <span>Total Payable</span>
                <span>₹{checkoutTotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="co-divider" />

              {/* Split Breakdown */}
              <div className="co-price-split-row">
                <span>Pay now (100%)</span>
                <strong>₹{checkoutTotal.toLocaleString("en-IN")}.00</strong>
              </div>
              <div className="co-price-split-row">
                <span>Balance payable at hotel</span>
                <strong>₹0.00</strong>
              </div>

              {/* EMI Banner matching screenshot */}
              <div className="co-emi-card">
                <div className="co-emi-header">
                  EMI from ₹{checkoutEmi.toLocaleString("en-IN")}/month
                </div>
                <div className="co-emi-strip">
                  <div className="co-emi-banks">
                    <span>💳 HDFC · ICICI · SBI & more</span>
                  </div>
                  <a
                    href="#emi-plans"
                    className="co-emi-view-link"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Hotel Nivasa No-Cost & Low-Cost EMI Plans:\n• 3 Months: ₹${Math.round(checkoutTotal / 3).toLocaleString("en-IN")}/mo\n• 6 Months: ₹${Math.round(checkoutTotal / 6).toLocaleString("en-IN")}/mo\n• 12 Months: ₹${checkoutEmi.toLocaleString("en-IN")}/mo\nAvailable on all major credit cards and debit card EMI at payment step.`);
                    }}
                  >
                    View Plans
                  </a>
                </div>
              </div>

              {/* Security Seal */}
              <div className="co-trust-badge">
                <Icon name="shield" size={15} /> 100% Secured by CCAvenue
              </div>
            </aside>
          </div>
        </main>

        {/* Confirmation Modal when Confirm & Pay is submitted */}
        {confirmedBooking && (
          <div className="be-checkout-modal" role="dialog" aria-modal="true">
            <div className="co-success-card">
              <button
                className="card-close"
                onClick={() => setConfirmedBooking(null)}
                aria-label="Close"
              >
                <Icon name="close" />
              </button>
              <div className="co-success-icon-wrap">
                <Icon name="check" size={32} />
              </div>
              <span className="eyebrow" style={{ color: "#059669" }}>Booking Confirmed</span>
              <h2 style={{ fontSize: "26px", color: "var(--navy)", margin: "8px 0" }}>
                Reservation ID: {confirmedBooking.bookingId}
              </h2>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, margin: "8px 0 20px" }}>
                Thank you, <strong>{confirmedBooking.guestName}</strong>! Your stay at <strong>Hotel Nivasa, Jalore</strong> is reserved from <strong>{formatBEDate(confirmedBooking.checkIn).full}</strong> to <strong>{formatBEDate(confirmedBooking.checkOut).full}</strong>.
              </p>

              <div style={{ background: "#f8fafc", padding: "16px 20px", borderRadius: "10px", margin: "16px 0", textAlign: "left", fontSize: "13px", border: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Room & Plan:</span>
                  <strong style={{ color: "#0f172a" }}>{confirmedBooking.roomName} ({confirmedBooking.planName})</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Guest Details:</span>
                  <span style={{ color: "#0f172a" }}>{confirmedBooking.email || "Email provided"} · {confirmedBooking.phone}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Total Amount:</span>
                  <strong style={{ color: "#0f172a", fontSize: "15px" }}>₹{confirmedBooking.total.toLocaleString("en-IN")}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#64748b" }}>Hotel Address:</span>
                  <span style={{ color: "#0f172a", textAlign: "right", maxWidth: "60%" }}>Station Road, Mudtra Sili, Jalore 343001</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
                <button
                  className="co-confirm-button"
                  style={{ flex: 1, padding: "12px", fontSize: "13.5px" }}
                  onClick={() => window.print()}
                >
                  Print / Save Voucher
                </button>
                <button
                  className="co-whatsapp-action-btn"
                  style={{ flex: 1, padding: "12px", fontSize: "13.5px", justifyContent: "center" }}
                  onClick={handleCheckoutWhatsApp}
                >
                  WhatsApp Assistance
                </button>
              </div>

              <button
                className="text-link"
                style={{ display: "inline-block", marginTop: "16px", fontSize: "13px", cursor: "pointer", background: "none", border: "none" }}
                onClick={() => navigateToHome()}
              >
                ← Return to Hotel Nivasa Website
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const navItems: [string, string, string][] = [
    ["Our Story", "story", "/story"],
    ["Accommodations", "accommodations", "/accommodations"],
    ["Dining", "dining", "/dining"],
    ["Experiences", "experiences", "/experiences"],
    ["Gallery", "gallery", "/gallery"],
    ["Location & Contact", "contact", "/contact"],
  ];

  return (
    <main>
      <header className={`site-header ${scrolled || menuOpen ? "solid" : ""}`}>
        <a
          href="/"
          className="nav-logo"
          aria-label="Hotel Nivasa home"
          onClick={(e) => {
            e.preventDefault();
            navigateToHome();
          }}
        >
          <img src="/assets/hotel_nivasa_logo_transparent.png" alt="Hotel Nivasa" />
        </a>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          {navItems.map(([label, target, path]) => (
            <a
              key={target}
              href={path}
              onClick={(e) => {
                e.preventDefault();
                navigateToSection(target);
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/availability"
            className="mobile-reserve"
            onClick={(e) => {
              e.preventDefault();
              navigateToAvailability();
            }}
          >
            Reserve now
          </a>
        </nav>
        <a
          href="/availability"
          className="reserve-button"
          onClick={(e) => {
            e.preventDefault();
            navigateToAvailability();
          }}
        >
          Reserve now
        </a>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <section id="top" className="hero">
        {/* Background sliding track */}
        <div className="hero-slider-viewport">
          <div
            className="hero-slider-track"
            style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <div
                className={`hero-slide-item ${currentHeroSlide === index ? "active" : ""}`}
                key={slide.url}
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="hero-slide-img"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero dark luxury gradient overlay for contrast */}
        <div className="hero-overlay" />

        {/* Hero Content */}
        <div className="hero-content">
          <p className="eyebrow light">Jalore hotel</p>
          <h1>
            hotel in Jalore
            <br />
            Hotel Nivasa Jalore
          </h1>
          <p className="hero-subtitle">
            room booking in Jalore, luxury stay Jalore
          </p>
          <a
            className="text-link light"
            href="/story"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("story");
            }}
          >
            Discover Nivasa <Icon name="arrow" size={18} />
          </a>
        </div>

        {/* Sliding Navigation Controls */}
        <button
          className="hero-nav-arrow prev"
          onClick={prevHeroSlide}
          aria-label="Previous slide"
        >
          <Icon name="arrow" size={20} />
        </button>

        <button
          className="hero-nav-arrow next"
          onClick={nextHeroSlide}
          aria-label="Next slide"
        >
          <Icon name="arrow" size={20} />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="hero-indicators" role="tablist" aria-label="Hero slider pagination">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.url}
              className={`hero-dot ${currentHeroSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={currentHeroSlide === idx}
            >
              <span className="hero-dot-bar" />
            </button>
          ))}
        </div>

        <div className="scroll-mark">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="booking-shell reveal-up" ref={bookingRef} aria-label="Check room availability">
        <div className="booking-bar">
          <label className="booking-field">
            <span>Check in</span>
            <div>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              <Icon name="calendar" size={19} />
            </div>
          </label>
          <label className="booking-field">
            <span>Check out</span>
            <div>
              <input
                type="date"
                min={checkIn}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
              <Icon name="calendar" size={19} />
            </div>
          </label>
          <div className="booking-field guest-field">
            <span>Guests & rooms</span>
            <button aria-expanded={guestOpen} onClick={() => setGuestOpen(!guestOpen)}>
              {guests.adults} Adult{guests.adults !== 1 ? "s" : ""}
              {guests.children
                ? `, ${guests.children} Child${guests.children !== 1 ? "ren" : ""}`
                : ""}
              , {guests.rooms} Room{guests.rooms !== 1 ? "s" : ""}
              <Icon name="chevron" size={17} />
            </button>
            {guestOpen && (
              <div className="guest-popover">
                <div className="be-popover-title">Room {guests.rooms}</div>
                <div className="be-counter-row">
                  <div className="be-counter-label">
                    <span>Adults</span>
                    <small>(12+ yrs)</small>
                  </div>
                  <div className="be-stepper">
                    <button
                      type="button"
                      onClick={() => adjustGuest("adults", -1)}
                      aria-label="Decrease adults"
                    >
                      −
                    </button>
                    <b>{guests.adults}</b>
                    <button
                      type="button"
                      onClick={() => adjustGuest("adults", 1)}
                      aria-label="Increase adults"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="be-counter-row">
                  <div className="be-counter-label">
                    <span>Children</span>
                    <small>(0-11 yrs)</small>
                  </div>
                  <div className="be-stepper">
                    <button
                      type="button"
                      onClick={() => adjustGuest("children", -1)}
                      aria-label="Decrease children"
                    >
                      −
                    </button>
                    <b>{guests.children}</b>
                    <button
                      type="button"
                      onClick={() => adjustGuest("children", 1)}
                      aria-label="Increase children"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                  <button
                    type="button"
                    className="be-add-room-btn"
                    onClick={() => adjustGuest("rooms", 1)}
                  >
                    + Add Room
                  </button>
                  {guests.rooms > 1 && (
                    <button
                      type="button"
                      style={{ background: "none", border: "none", color: "#e11d48", fontSize: "12px", cursor: "pointer" }}
                      onClick={() => adjustGuest("rooms", -1)}
                    >
                      Remove Room
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  className="be-apply-btn"
                  onClick={() => setGuestOpen(false)}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
          <a
            href="/availability"
            className="availability-button"
            onClick={(e) => {
              e.preventDefault();
              checkAvailability();
            }}
          >
            Check availability <Icon name="arrow" size={18} />
          </a>
        </div>
        {bookingError && (
          <p className="booking-error" role="alert">
            {bookingError}
          </p>
        )}
      </section>

      <section id="story" className="story section">
        <div className="story-images reveal">
          <img className="story-main" src={photos.courtyard} alt="Historic Rajasthani courtyard" />
          <img className="story-detail" src={photos.detail} alt="Ornate sandstone arches" />
          <div className="year-seal">
            <strong>2026</strong>
            <span>A new chapter</span>
          </div>
        </div>
        <div className="story-copy reveal delay-1">
          <p className="eyebrow">Welcome to Jalore</p>
          <h2>
            The Spirit
            <br />
            of Nivasa
          </h2>
          <LotusMark />
          <p className="lead">
            Rooted in the spirit of Marwar, Hotel Nivasa brings together gracious Rajasthani
            hospitality, thoughtful interiors, and contemporary comfort.
          </p>
          <p>
            Located in the heart of Jalore, it is an inviting retreat for celebrations, business
            travel, family stays, and journeys through western Rajasthan.
          </p>
          <a
            className="text-link"
            href="/experiences"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("experiences");
            }}
          >
            Discover our story <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>

      <section id="accommodations" className="rooms-section section">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Stay beautifully</p>
          <h2>Rooms & Suites</h2>
          <p>
            Private spaces shaped by local craft, quiet luxury, and the easy rhythm of Rajasthan.
          </p>
        </div>
        <div className="filter-tabs reveal delay-1" role="tablist" aria-label="Filter accommodations">
          {[
            ["all", "All"],
            ["deluxe", "Deluxe Rooms"],
            ["superior", "Nivasa Superior"],
            ["family", "Double & Single Bed"],
          ].map(([value, label]) => (
            <button
              key={value}
              className={roomFilter === value ? "active" : ""}
              onClick={() => setRoomFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="room-grid">
          {rooms
            .filter((room) => roomFilter === "all" || room.category === roomFilter)
            .map((room, index) => (
              <article className={`room-card reveal delay-${(index % 3) + 1}`} key={room.name}>
                <div className="room-image">
                  <img src={room.image} alt={room.name} loading="lazy" />
                  <span>From {room.price} / night</span>
                </div>
                <div className="room-content">
                  <p className="room-kicker">{room.kicker}</p>
                  <h3>{room.name}</h3>
                  <div className="room-meta">
                    <span>{room.size}</span>
                    <span>{room.bed}</span>
                    <span>{room.guests}</span>
                  </div>
                  <p>{room.view} · High-speed Wi-Fi · Climate control · Artisanal interiors</p>
                  <div className="room-actions">
                    <button onClick={() => navigateToAvailability(room.name)}>View details</button>
                    <a
                      href={`/availability?room=${bookingRooms.find((r) => r.name === room.name)?.id || "deluxe"}`}
                      className="book-link"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToAvailability(room.name);
                      }}
                    >
                      Book this room <Icon name="arrow" size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      <section id="dining" className="features section">
        <article className="feature-card reveal">
          <img
            src={photos.dining}
            alt="A refined dining table prepared for dinner"
            loading="lazy"
          />
          <div className="feature-content">
            <p className="eyebrow light">Flavours of the region</p>
            <h2>
              Royal Marwari
              <br />
              Dining
            </h2>
            <p>
              Generous local recipes, seasonal ingredients, and contemporary classics—served with
              warmth.
            </p>
            <a
              href="/contact"
              className="text-link light"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("contact");
              }}
            >
              Explore dining <Icon name="arrow" size={18} />
            </a>
          </div>
        </article>
        <article id="experiences" className="feature-card reveal delay-1">
          <img src={photos.fort} alt="Rajasthani fort rising above the landscape" loading="lazy" />
          <div className="feature-content">
            <p className="eyebrow light">Beyond our doors</p>
            <h2>
              Discover
              <br />
              Jalore
            </h2>
            <p>
              Walk Suvarnagiri, visit Sundha Mata, and follow stories through ancient markets and
              monuments.
            </p>
            <a
              href="/contact"
              className="text-link light"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("contact");
              }}
            >
              Plan an excursion <Icon name="arrow" size={18} />
            </a>
          </div>
        </article>
      </section>

      <section className="amenities section">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Everything considered</p>
          <h2>Signature Comforts</h2>
        </div>
        <div className="amenity-grid reveal delay-1">
          {[
            ["concierge", "24-Hour Concierge"],
            ["wifi", "High-Speed Wi-Fi"],
            ["dining", "Rajasthani Dining"],
            ["parking", "Secure Parking"],
            ["compass", "Excursion Desk"],
            ["celebration", "Celebration Lawn"],
          ].map(([icon, label]) => (
            <div className="amenity" key={label}>
              <Icon name={icon as IconName} size={31} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery-section section">
        <div className="gallery-head reveal">
          <div>
            <p className="eyebrow">A glimpse of Nivasa</p>
            <h2>Stories in Detail</h2>
          </div>
          <div className="filter-tabs compact">
            {[
              ["all", "All"],
              ["architecture", "Architecture"],
              ["chambers", "Chambers"],
              ["dining", "Dining"],
              ["courtyards", "Courtyards"],
            ].map(([value, label]) => (
              <button
                key={value}
                className={galleryFilter === value ? "active" : ""}
                onClick={() => setGalleryFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-grid">
          {filteredGallery.map((item, index) => (
            <button
              className="reveal"
              key={item.src}
              onClick={() => setLightbox(index)}
              aria-label={`Open image: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span>View</span>
            </button>
          ))}
        </div>
      </section>

      <section id="contact" className="location section">
        <div className="map-panel reveal">
          <iframe
            title="Hotel Nivasa Location Map"
            src="https://maps.google.com/maps?q=25.3493262,72.6310398+(HOTEL+NIVASA)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            className="map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.app.goo.gl/PW3ZuWLj1UmNFmqz8"
            target="_blank"
            rel="noreferrer"
            className="map-open-pill"
          >
            <Icon name="pin" size={16} />
            <span>Open in Google Maps</span>
          </a>
        </div>
        <div className="location-copy reveal delay-1">
          <p className="eyebrow">Find your way home</p>
          <h2>
            In the Heart
            <br />
            of Jalore
          </h2>
          <p className="address">
            <strong>Hotel Nivasa (होटल निवास)</strong>
            <br />
            Plot No. 12, Station Road, Mudtra Sili
            <br />
            Shivaji Nagar (Near High School)
            <br />
            Jalor, Rajasthan 343001
            <br />
            <span style={{ color: "var(--gold-muted)", display: "inline-block", marginTop: "4px", fontSize: "0.85em" }}>
              Plus Code: 8JXJ+PC Jalor, Rajasthan
            </span>
          </p>
          <div className="distance-grid">
            <div>
              <Icon name="train" />
              <span>
                <strong>Jalore Station</strong>Minutes from the hotel
              </span>
            </div>
            <div>
              <Icon name="plane" />
              <span>
                <strong>Jodhpur Airport</strong>Regional air connection
              </span>
            </div>
          </div>
          <a
            className="primary-button"
            href="https://maps.app.goo.gl/PW3ZuWLj1UmNFmqz8"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/assets/hotel_nivasa_logo_transparent.png" alt="Hotel Nivasa" />
          <p>Where the gracious spirit of Marwar meets the quiet comforts of today.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Explore</h3>
            {navItems.slice(0, 4).map(([label, target, path]) => (
              <a
                key={target}
                href={path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(target);
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+918778085139">+91 87780 85139</a>
            <a href="mailto:reservations@hotelnivasa.com">reservations@hotelnivasa.com</a>
            <span>Check-in: 2:00 PM</span>
            <span>Check-out: 11:00 AM</span>
          </div>
          <div>
            <h3>Visit</h3>
            <span>
              Plot No. 12, Station Road
              <br />
              Shivaji Nagar, Mudtra Sili
              <br />
              Jalor, Rajasthan 343001
            </span>
            <a
              href="https://maps.app.goo.gl/PW3ZuWLj1UmNFmqz8"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps Location
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hotel Nivasa. All rights reserved.</span>
          <span>Photography via Unsplash</span>
        </div>
      </footer>

      {lightbox !== null && filteredGallery[lightbox] && (
        <div className="modal lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button
            className="modal-close"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <Icon name="close" />
          </button>
          <button
            className="lightbox-nav prev"
            onClick={() =>
              setLightbox((lightbox - 1 + filteredGallery.length) % filteredGallery.length)
            }
            aria-label="Previous image"
          >
            ‹
          </button>
          <img src={filteredGallery[lightbox].src} alt={filteredGallery[lightbox].alt} />
          <button
            className="lightbox-nav next"
            onClick={() => setLightbox((lightbox + 1) % filteredGallery.length)}
            aria-label="Next image"
          >
            ›
          </button>
          <p>{filteredGallery[lightbox].alt}</p>
        </div>
      )}

      {bookingOpen && (
        <div
          className="booking-engine-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Hotel Nivasa Booking Engine"
        >
          {/* Top Navigation */}
          <header className="be-top-nav">
            <a
              href="/"
              className="be-brand"
              onClick={(e) => {
                e.preventDefault();
                navigateToHome();
              }}
              style={{ textDecoration: "none" }}
            >
              <img src="/assets/hotel_nivasa_logo_transparent.png" alt="Hotel Nivasa" />
              <div className="be-brand-text">
                <h1>Hotel Nivasa</h1>
                <span>Jalore, Rajasthan</span>
              </div>
            </a>
            <div className="be-nav-right">
              <a
                href="/"
                className="be-back-btn"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToHome();
                }}
              >
                ← Back to Hotel Website
              </a>
            </div>
          </header>

          {/* Search / Filter Bar matching Image 1 & Image 2 */}
          <div className="be-search-bar">
            {/* Hotel Selector */}
            <div className="be-bar-item hotel-item">
              <div>
                <span className="be-bar-label">Hotel</span>
                <span className="be-bar-val">Hotel Nivasa, Jalore</span>
              </div>
            </div>

            {/* Check-In */}
            <label className="be-bar-item">
              <Icon name="calendar" size={18} />
              <div>
                <span className="be-bar-label">Check-In</span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => updateDates(e.target.value, undefined)}
                />
              </div>
            </label>

            {/* Check-Out */}
            <label className="be-bar-item">
              <Icon name="calendar" size={18} />
              <div>
                <span className="be-bar-label">Check-Out</span>
                <input
                  type="date"
                  min={checkIn}
                  value={checkOut}
                  onChange={(e) => updateDates(undefined, e.target.value)}
                />
              </div>
            </label>

            {/* Rooms & Guests Picker matching Image 2 */}
            <div className="be-bar-item" style={{ position: "relative" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
                onClick={() => setBeGuestOpen(!beGuestOpen)}
                aria-expanded={beGuestOpen}
              >
                <Icon name="users" size={18} />
                <div>
                  <span className="be-bar-label">Rooms & Guests</span>
                  <span className="be-bar-val">
                    {guests.rooms} Room, {guests.adults} Adults, {guests.children} Children
                  </span>
                </div>
                <Icon name="chevron" size={14} />
              </button>

              {/* Dropdown Popover matching Image 2 */}
              {beGuestOpen && (
                <div className="be-guest-popover">
                  <div className="be-popover-title">Room {guests.rooms}</div>
                  <div className="be-counter-row">
                    <div className="be-counter-label">
                      <span>Adults</span>
                      <small>(12+ yrs)</small>
                    </div>
                    <div className="be-stepper">
                      <button
                        onClick={() => adjustGuest("adults", -1)}
                        aria-label="Decrease adults"
                      >
                        −
                      </button>
                      <b>{guests.adults}</b>
                      <button
                        onClick={() => adjustGuest("adults", 1)}
                        aria-label="Increase adults"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="be-counter-row">
                    <div className="be-counter-label">
                      <span>Children</span>
                      <small>(0-11 yrs)</small>
                    </div>
                    <div className="be-stepper">
                      <button
                        onClick={() => adjustGuest("children", -1)}
                        aria-label="Decrease children"
                      >
                        −
                      </button>
                      <b>{guests.children}</b>
                      <button
                        onClick={() => adjustGuest("children", 1)}
                        aria-label="Increase children"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <button
                      className="be-add-room-btn"
                      onClick={() => adjustGuest("rooms", 1)}
                    >
                      + Add Room
                    </button>
                    {guests.rooms > 1 && (
                      <button
                        style={{ background: "none", border: "none", color: "#e11d48", fontSize: "12px", cursor: "pointer" }}
                        onClick={() => adjustGuest("rooms", -1)}
                      >
                        Remove Room
                      </button>
                    )}
                  </div>

                  <button className="be-apply-btn" onClick={() => setBeGuestOpen(false)}>
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Promo Code matching Image 1 */}
            <div className="be-bar-item" style={{ position: "relative" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "inherit",
                }}
                onClick={() => setPromoOpen(!promoOpen)}
              >
                <Icon name="tag" size={16} />
                <span className="be-bar-val" style={{ color: promoApplied ? "#15803d" : "#475569" }}>
                  {promoApplied ? "NIVASA10 (10% Off)" : "Have a promo code?"}
                </span>
              </button>

              {promoOpen && (
                <div className="be-promo-popover">
                  <span className="be-bar-label" style={{ marginBottom: "6px" }}>Promo Code</span>
                  <input
                    type="text"
                    placeholder="Enter NIVASA10"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                  />
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      className="be-apply-btn"
                      style={{ marginTop: 0 }}
                      onClick={applyPromo}
                    >
                      Apply Code
                    </button>
                    <button
                      style={{ background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "6px", padding: "6px 10px", fontSize: "12px", cursor: "pointer" }}
                      onClick={() => setPromoOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Direct Booking Advantage Banner matching Image 1 */}
          <div className="be-banner">
            <Icon name="shield" size={20} />
            <div>
              <strong>Unlock Exclusive Rates!</strong> Direct booking guarantee with complimentary traditional morning tea, high-speed Wi-Fi, and priority check-in.
            </div>
          </div>

          {/* Main Booking Two-Column Layout */}
          <div className="be-layout">
            {/* Left Column: Room Cards */}
            <div className="be-rooms-list">
              {bookingRooms.map((room) => (
                <article className="be-room-card" key={room.id}>
                  {/* Room Overview */}
                  <div className="be-room-main">
                    <img className="be-room-img" src={room.image} alt={room.name} />
                    <div className="be-room-info">
                      <div className="be-room-header">
                        <h2 className="be-room-title">{room.name}</h2>
                        <span className="be-available-badge">{room.badge}</span>
                      </div>
                      <div className="be-room-specs">
                        {room.size} · {room.guests} · {room.view}
                      </div>
                      <p className="be-room-desc">{room.description}</p>
                      <div className="be-amenity-pills">
                        {room.amenities.map((am) => (
                          <span className="be-pill" key={am}>
                            {am}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Rate Plans Table matching Image 1 */}
                  <div className="be-plans-table">
                    <div className="be-plan-section-title">Inaugural Offer</div>
                    {room.plans.map((plan) => {
                      const isSelected = selectedPlan?.planId === plan.id;
                      return (
                        <div className="be-plan-row" key={plan.id}>
                          <div className="be-plan-name">{plan.name}</div>
                          <div className="be-plan-right">
                            <div className="be-price-box">
                              <div>
                                <span className="be-original-price">
                                  ₹{plan.originalPrice.toLocaleString("en-IN")}
                                </span>
                                <span className="be-current-price">
                                  ₹{plan.price.toLocaleString("en-IN")}
                                </span>
                              </div>
                              <span className="be-price-note">
                                Estimate for 1 room / night
                              </span>
                            </div>
                            <button
                              className={`be-select-btn ${isSelected ? "selected" : ""}`}
                              onClick={() => togglePlan(room.id, room.name, plan)}
                            >
                              {isSelected ? "Selected ✓" : "Select"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>

            {/* Right Column: Sticky STAY DETAILS Sidebar matching Image 1 */}
            <aside className="be-sidebar" aria-label="Stay Details Summary">
              <div className="be-sidebar-title">STAY DETAILS</div>

              {/* Check-In / Nights / Check-Out */}
              <div className="be-stay-row">
                <div className="be-date-col">
                  <small>CHECK-IN</small>
                  <strong>{formatBEDate(checkIn).short}</strong>
                  <span>{formatBEDate(checkIn).weekday} · 02:00 PM</span>
                </div>

                <div className="be-nights-badge">
                  {nights} Night{nights > 1 ? "s" : ""}
                </div>

                <div className="be-date-col" style={{ textAlign: "right" }}>
                  <small>CHECK-OUT</small>
                  <strong>{formatBEDate(checkOut).short}</strong>
                  <span>{formatBEDate(checkOut).weekday} · 11:00 AM</span>
                </div>
              </div>

              {/* Guest & Rooms */}
              <div className="be-section-subtitle">GUEST & ROOMS</div>
              <div className="be-guest-summary">
                {guests.rooms} Room, {guests.adults} Adults{guests.children ? `, ${guests.children} Children` : ""}
              </div>

              {/* Selected Room Details */}
              {selectedPlan ? (
                <div className="be-selected-room-card">
                  <b>{selectedPlan.roomName}</b>
                  <span>{selectedPlan.planName}</span>
                  <div style={{ marginTop: "4px", fontSize: "12px", color: "var(--navy)", fontWeight: 600 }}>
                    ₹{selectedPlan.price.toLocaleString("en-IN")} / night
                  </div>
                </div>
              ) : (
                <div style={{ fontSize: "12px", color: "#94a3b8", fontStyle: "italic", marginBottom: "16px" }}>
                  Please select a room and meal plan from the list.
                </div>
              )}

              {/* Price Breakdown matching Image 1 */}
              <div className="be-section-subtitle">PRICE</div>
              <div className="be-price-breakdown">
                <div className="be-price-row">
                  <span>Tariff for {nights} night{nights > 1 ? "s" : ""}</span>
                  <span>₹{tariff.toLocaleString("en-IN")}</span>
                </div>

                {promoApplied && (
                  <div className="be-price-row" style={{ color: "#16a34a" }}>
                    <span>Promo Discount (10%)</span>
                    <span>−₹{discount.toLocaleString("en-IN")}</span>
                  </div>
                )}

                <div className="be-price-row">
                  <span>Taxes & Fees (12% GST)</span>
                  <span>₹{taxes.toLocaleString("en-IN")}</span>
                </div>

                <div className="be-price-row total">
                  <span>TOTAL PAYABLE</span>
                  <span>₹{totalPayable.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                className={`be-checkout-button ${selectedPlan ? "active" : ""}`}
                disabled={!selectedPlan}
                onClick={() => navigateToCheckout()}
              >
                Continue to Checkout
              </button>
            </aside>
          </div>

          {/* Checkout Modal when Continue to Checkout is clicked */}
          {checkoutOpen && (
            <div className="be-checkout-modal" role="dialog" aria-modal="true">
              <div className="be-checkout-card">
                <button
                  className="card-close"
                  onClick={() => setCheckoutOpen(false)}
                  aria-label="Close checkout"
                >
                  <Icon name="close" />
                </button>

                {confirmedBooking ? (
                  <div style={{ textAlign: "center", padding: "10px 0" }}>
                    <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "#ebfbee", color: "#2b8a3e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      <Icon name="check" size={28} />
                    </div>
                    <span className="eyebrow" style={{ color: "#2b8a3e" }}>Reservation Confirmed</span>
                    <h2 style={{ fontSize: "28px", color: "var(--navy)", margin: "8px 0" }}>
                      Booking ID: {confirmedBooking.bookingId}
                    </h2>
                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>
                      Thank you, <strong>{confirmedBooking.guestName}</strong>! Your booking for <strong>{confirmedBooking.roomName}</strong> ({confirmedBooking.planName}) has been registered for <strong>{formatBEDate(confirmedBooking.checkIn).full}</strong> to <strong>{formatBEDate(confirmedBooking.checkOut).full}</strong>.
                    </p>
                    <div style={{ background: "#f8fafc", padding: "14px", borderRadius: "8px", margin: "20px 0", textAlign: "left", fontSize: "13px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span>Total Payable at Check-In:</span>
                        <strong style={{ color: "var(--navy)" }}>₹{confirmedBooking.total.toLocaleString("en-IN")}</strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Hotel Contact:</span>
                        <a href="tel:+918778085139" style={{ color: "var(--navy)", fontWeight: 600 }}>+91 87780 85139</a>
                      </div>
                    </div>
                    <button
                      className="primary-button"
                      style={{ width: "100%", justifyContent: "center" }}
                      onClick={() => {
                        navigateToHome();
                      }}
                    >
                      Back to Hotel Nivasa
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3>Guest Information</h3>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: "-8px 0 16px" }}>
                      Please provide your contact details to complete your reservation for <strong>{selectedPlan?.roomName}</strong>.
                    </p>

                    <form onSubmit={handleHotelConfirm}>
                      <div className="be-form-group">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikramaditya Rathore"
                          value={guestForm.name}
                          onChange={(e) => setGuestForm({ ...guestForm, name: e.target.value })}
                        />
                      </div>

                      <div className="be-form-group">
                        <label>Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={guestForm.phone}
                          onChange={(e) => setGuestForm({ ...guestForm, phone: e.target.value })}
                        />
                      </div>

                      <div className="be-form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="vikram@example.com"
                          value={guestForm.email}
                          onChange={(e) => setGuestForm({ ...guestForm, email: e.target.value })}
                        />
                      </div>

                      <div className="be-form-group">
                        <label>Special Requests (Optional)</label>
                        <textarea
                          rows={2}
                          placeholder="Early check-in, ground floor preference, Marwari meal requests..."
                          value={guestForm.notes}
                          onChange={(e) => setGuestForm({ ...guestForm, notes: e.target.value })}
                        />
                      </div>

                      <div className="be-form-actions">
                        <button
                          type="button"
                          className="be-whatsapp-btn"
                          onClick={handleWhatsAppBooking}
                        >
                          Book via WhatsApp
                        </button>
                        <button
                          type="submit"
                          className="be-hotel-confirm-btn"
                        >
                          Confirm & Pay at Hotel
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
