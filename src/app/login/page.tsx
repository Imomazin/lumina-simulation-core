'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Route } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Chrome,
  Loader2,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Play,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

// =============================================================================
// VIDEO BACKGROUND COMPONENT (INLINE FOR LOGIN PAGE)
// =============================================================================

function LoginVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError) return;

    const attemptPlay = async () => {
      try {
        video.muted = true;
        await video.play();
        setIsPlaying(true);
        setShowControls(true);
      } catch {
        setShowControls(true);
      }
    };

    attemptPlay();
  }, [hasError]);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        video.muted = true;
        setIsMuted(true);
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      // Autoplay blocked
    }
  };

  // Fallback gradient when no video or error
  if (hasError) {
    return (
      <div
        className={`absolute inset-0 ${
          theme === 'light'
            ? 'bg-gradient-to-br from-violet-100 via-pink-50 to-blue-100'
            : 'bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0f0f2e]'
        }`}
      >
        {/* Animated gradient orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-purple-200/50' : 'bg-cyan-500/10'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-pink-200/50' : 'bg-fuchsia-500/10'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/scenarios/scenario-01.mp4"
        autoPlay
        loop
        playsInline
        muted={isMuted}
        preload="auto"
        onError={() => setHasError(true)}
      />

      {/* Subtle overlay */}
      <div
        className={`absolute inset-0 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-white/30 to-transparent'
            : 'bg-gradient-to-r from-black/40 to-transparent'
        }`}
      />

      {/* Sound control */}
      {showControls && (
        <motion.button
          onClick={isPlaying ? toggleSound : handlePlay}
          className={`absolute bottom-6 left-6 z-10 flex items-center gap-2 px-4 py-2
                     backdrop-blur-md rounded-full border transition-all duration-200 text-sm font-medium
                     ${
                       theme === 'light'
                         ? 'bg-white/60 border-purple-200/50 text-purple-700 hover:bg-white/80'
                         : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/20'
                     }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {!isPlaying ? (
            <>
              <Play className="w-4 h-4" />
              <span>Play video</span>
            </>
          ) : isMuted ? (
            <>
              <VolumeX className="w-4 h-4" />
              <span>Enable sound</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" />
              <span>Sound on</span>
            </>
          )}
        </motion.button>
      )}
    </div>
  );
}

// =============================================================================
// SOCIAL LOGIN BUTTON COMPONENT
// =============================================================================

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

function SocialButton({ icon, label, onClick, variant = 'primary' }: SocialButtonProps) {
  const { theme } = useTheme();

  return (
    <motion.button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl
                 font-semibold text-base transition-all duration-200
                 ${
                   variant === 'primary'
                     ? theme === 'light'
                       ? 'bg-white text-gray-800 hover:bg-gray-50 shadow-lg shadow-purple-500/10 border border-purple-100'
                       : 'bg-white text-gray-900 hover:bg-gray-100'
                     : theme === 'light'
                     ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/25'
                     : 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-gray-900 hover:from-cyan-400 hover:to-cyan-500'
                 }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );
}

// =============================================================================
// MAIN LOGIN PAGE
// =============================================================================

export default function LoginPage() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    // TODO: Implement Supabase Google auth
    // const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleEmailLogin = async () => {
    setIsLoading(true);
    // TODO: Navigate to email login flow or show email input
    setTimeout(() => setIsLoading(false), 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex relative">
      {/* ===================================================================
          FULL-SCREEN VIDEO BACKGROUND - Always visible on all screen sizes
          =================================================================== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 0,
          opacity: 1,
          display: 'block',
          visibility: 'visible',
        }}
        src="/scenarios/scenario-01.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* ===================================================================
          LEFT PANEL - Overlay content on video (2/3 width on desktop)
          =================================================================== */}
      <div className="hidden lg:flex lg:flex-1 relative z-10">
        {/* Dark gradient overlay for text readability over video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

        {/* Branding overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-12 z-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center
                           ${
                             theme === 'light'
                               ? 'bg-white/80 backdrop-blur-sm shadow-lg'
                               : 'bg-white/10 backdrop-blur-sm border border-white/20'
                           }`}
              >
                <span
                  className={`text-xl font-bold ${
                    theme === 'light' ? 'text-purple-600' : 'text-cyan-400'
                  }`}
                >
                  P
                </span>
              </div>
              <span
                className={`text-2xl font-bold font-heading ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}
              >
                Praxis
              </span>
            </Link>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p
              className={`text-lg font-medium mb-2 ${
                theme === 'light' ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              Executive Simulations
            </p>
            <p
              className={`text-sm ${
                theme === 'light' ? 'text-gray-500' : 'text-white/50'
              }`}
            >
              Where leaders learn by doing. Experience the pressure of real decisions
              in a safe environment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===================================================================
          RIGHT PANEL - Login Form (1/3 width on desktop, full on mobile)
          =================================================================== */}
      <div
        className={`w-full lg:w-[420px] xl:w-[480px] flex flex-col relative z-10
                   ${
                     theme === 'light'
                       ? 'bg-gray-900/90 backdrop-blur-sm'
                       : 'bg-[#0a0a12]/90 backdrop-blur-sm'
                   }`}
      >
        {/* Theme toggle */}
        <motion.button
          onClick={toggleTheme}
          className={`absolute top-6 right-6 p-3 rounded-xl transition-all duration-200
                     ${
                       theme === 'light'
                         ? 'bg-white/10 hover:bg-white/20 text-white'
                         : 'bg-white/5 hover:bg-white/10 text-white'
                     }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5 text-amber-400" />
          )}
        </motion.button>

        {/* Mobile logo */}
        <div className="lg:hidden p-6 pb-0">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="text-lg font-bold text-cyan-400">P</span>
            </div>
            <span className="text-xl font-bold text-white font-heading">Praxis</span>
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-12 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-heading mb-3 tracking-tight">
              LEAD WITH
              <br />
              <span
                className={
                  theme === 'light'
                    ? 'text-purple-400'
                    : 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent'
                }
              >
                CONFIDENCE
              </span>
            </h1>

            <p className="text-gray-400 mb-10">
              Sign in to access executive simulations
            </p>

            {/* Social login buttons */}
            <div className="space-y-4">
              <SocialButton
                icon={<Chrome className="w-5 h-5" />}
                label="Sign in with Google"
                onClick={handleGoogleLogin}
              />

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-gray-700" />
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              <SocialButton
                icon={
                  isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Mail className="w-5 h-5" />
                  )
                }
                label="Sign in with email"
                onClick={handleEmailLogin}
                variant="secondary"
              />
            </div>

            {/* Terms */}
            <p className="text-gray-500 text-sm mt-8 leading-relaxed">
              By signing in, you agree to our{' '}
              <Link href={'/terms' as Route} className="text-gray-300 hover:text-white underline">
                Terms of Service
              </Link>
              ,{' '}
              <Link href={'/privacy' as Route} className="text-gray-300 hover:text-white underline">
                Privacy Policy
              </Link>
              , and{' '}
              <Link href={'/acceptable-use' as Route} className="text-gray-300 hover:text-white underline">
                Acceptable Use Policy
              </Link>
              .
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="px-8 lg:px-12 py-6 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-500 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <Link
              href={'/careers' as Route}
              className="text-gray-500 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href={'/blog' as Route}
              className="text-gray-500 hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-xs text-gray-600">
            <Link href={'/privacy' as Route} className="hover:text-gray-400 transition-colors">
              Privacy policy
            </Link>
            <Link href={'/terms' as Route} className="hover:text-gray-400 transition-colors">
              Terms of service
            </Link>
            <Link href={'/support' as Route} className="hover:text-gray-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
