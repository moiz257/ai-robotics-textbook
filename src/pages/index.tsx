import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { motion } from 'framer-motion';

const floatingVariant = {
  initial: { y: 0 },
  animate: {
    y: -12,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut', delay },
  }),
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroRoot}>
      <div className={styles.heroBackgroundGlow} />
      <div className={styles.heroGrid}>
        <motion.div
          className={styles.heroLeft}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className={styles.heroPill}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className={styles.pillDot} />
            <span className={styles.pillLabel}>
              AI &amp; Robotics Textbook · Interactive &amp; Agentic
            </span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            variants={fadeInUp}
            custom={0.15}
          >
            {siteConfig.title}
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            variants={fadeInUp}
            custom={0.25}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            className={styles.heroDescription}
            variants={fadeInUp}
            custom={0.35}
          >
            Co‑learn AI, agents, and robotics with a spec‑driven, project‑based
            book. Crafted for students, builders, and researchers who want a
            premium, future‑ready learning experience.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            variants={fadeInUp}
            custom={0.45}
          >
            <Link className={styles.primaryCta} to="/docs/chapter-1">
              Start Reading
            </Link>
            <Link className={styles.secondaryCta} to="/chatbot">
              Ask the AI Tutor
            </Link>
          </motion.div>

          <motion.div
            className={styles.heroMeta}
            variants={fadeInUp}
            custom={0.6}
          >
            <span>Spec‑driven chapters</span>
            <span>Hands‑on robotics labs</span>
            <span>Agentic AI patterns</span>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
        >
          <motion.div
            className={styles.floatingBadge}
            variants={floatingVariant}
            initial="initial"
            animate="animate"
          >
            <span className={styles.badgeLabel}>AI‑Native Series</span>
            <span className={styles.badgeSub}>Built for the agentic era</span>
          </motion.div>

          <motion.div
            className={styles.bookCard}
            whileHover={{ rotateX: 10, rotateY: -12, translateY: -6 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className={styles.bookGlow} />
            <div className={styles.bookCover}>
              <div className={styles.bookTitleBlock}>
                <span className={styles.bookSeries}>Panaversity AI‑Native Book</span>
                <h2 className={styles.bookTitle}>
                  AI &amp; Robotics
                  <span className={styles.bookTitleAccent}> Textbook</span>
                </h2>
                <p className={styles.bookTagline}>
                  Python · TypeScript · Agentic Patterns
                </p>
              </div>
              <div className={styles.bookFooterRow}>
                <span className={styles.badgeChip}>Open Source</span>
                <span className={styles.badgeChip}>Project‑based</span>
                <span className={styles.badgeChip}>Spec‑driven</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.orbitingOrb}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
              transition: { duration: 18, repeat: Infinity, ease: 'linear' },
            }}
          />
        </motion.div>
      </div>
    </header>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="AI & Robotics textbook with an AI-native, agentic learning experience"
    >
      <HomepageHeader />
      <main className={styles.mainSection} />
    </Layout>
  );
}

export default Home;
