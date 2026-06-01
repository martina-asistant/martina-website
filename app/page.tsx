"use client"

import { useState, useCallback } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { PortalTransition } from '@/components/portal-transition'
import { MainContent } from '@/components/main-content'

const TEST_MODE = true

const WORKING_DAYS = [1, 2, 3, 4, 5]

const BLOCKED_DATES: string[] = []

const availableHours = ["10:00", "11:00", "12:00", "16:00", "17:00", "18:00"]

const weekDays = ["L", "M", "X", "J", "V", "S", "D"]

function toDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart
