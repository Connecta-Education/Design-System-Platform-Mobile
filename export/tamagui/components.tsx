/**
 * Connecta Design System — Tamagui components
 * -------------------------------------------
 * Styled primitives + the GoodTalk Nudge Banner anatomy, ported from the
 * HTML/JSX prototypes (preview/components-nudge.html,
 * ui_kits/chat-app/coaching-cards.jsx).
 *
 * Everything is theme-driven: wrap a banner in <Theme name="voice_goodtalk">
 * (or "nudge" / "warn" / "voice_cosmo" / "voice_teacher" …) and the badge,
 * headline, buttons and "why" panel recolor from the theme contract in
 * themes.ts. No per-instance color props needed.
 *
 * Icons: pass any React node (e.g. a lucide-react icon) into `icon` props.
 */
// NOTE: production apps should import these from '@tamagui/core' (see README).
// The preview bundler can't resolve npm packages, so we use a local shim.
import { styled, Stack, Text, Theme, useTheme } from './tamaguiRuntime';
import { useState } from 'react';

/* ------------------------------------------------------------------ *
 * Layout primitives
 * ------------------------------------------------------------------ */
export const XStack = styled(Stack, { flexDirection: 'row' });
export const YStack = styled(Stack, { flexDirection: 'column' });

/* ------------------------------------------------------------------ *
 * Text roles (map the type scale + semantic colors)
 * ------------------------------------------------------------------ */
export const Headline = styled(Text, {
  fontFamily: '$heading', fontSize: '$h4', fontWeight: '$semi',
  lineHeight: 22, letterSpacing: -0.08, color: '$color',
});
export const Body = styled(Text, {
  fontFamily: '$body', fontSize: '$bodySm', lineHeight: 21, color: '$color',
});
export const Meta = styled(Text, {
  fontFamily: '$mono', fontSize: '$micro', letterSpacing: 0.3, color: '$colorMeta',
});
export const Eyebrow = styled(Text, {
  fontFamily: '$mono', fontSize: 10, fontWeight: '$medium',
  letterSpacing: 1.2, textTransform: 'uppercase', color: '$colorSubtle',
});

/* ------------------------------------------------------------------ *
 * Badge — solid pill, theme-colored
 * ------------------------------------------------------------------ */
const BadgeFrame = styled(XStack, {
  alignItems: 'center', gap: '$1',
  paddingVertical: 6, paddingHorizontal: 10,
  borderRadius: '$pill', backgroundColor: '$badgeBackground',
});
export function Badge({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  const t = useTheme();
  return (
    <BadgeFrame>
      {icon}
      <Text fontFamily="$mono" fontSize={10} fontWeight="$semi"
            letterSpacing={1.2} textTransform="uppercase"
            color={t.badgeColor?.get?.() ?? '$badgeColor'}>
        {children}
      </Text>
    </BadgeFrame>
  );
}

/* ------------------------------------------------------------------ *
 * Buttons — filled (primary) + outline (ghost / icon-only)
 * ------------------------------------------------------------------ */
export const PrimaryButton = styled(XStack, {
  alignItems: 'center', justifyContent: 'center', gap: '$2',
  height: '$control', paddingHorizontal: '$4',
  borderRadius: '$md', backgroundColor: '$primaryBackground',
  cursor: 'pointer',
  hoverStyle: { opacity: 0.92 },
  pressStyle: { opacity: 0.84 },
  variants: {
    flex: { true: { flex: 1 } },
  } as const,
});
export const GhostButton = styled(XStack, {
  alignItems: 'center', justifyContent: 'center', gap: '$2',
  height: '$control', paddingHorizontal: '$4',
  borderRadius: '$md', borderWidth: 1.5, borderColor: '$ghostBorderColor',
  backgroundColor: 'transparent', cursor: 'pointer',
  hoverStyle: { backgroundColor: 'rgba(0,0,0,0.04)' },
  variants: {
    iconOnly: { true: { width: '$iconBtn', paddingHorizontal: 0 } },
  } as const,
});
export const ButtonLabel = styled(Text, {
  fontFamily: '$body', fontSize: '$bodySm', fontWeight: '$semi',
});

/* ------------------------------------------------------------------ *
 * Card shell — the Nudge Banner surface (soft shadow, rounded, no rule)
 * ------------------------------------------------------------------ */
export const CardShell = styled(YStack, {
  backgroundColor: '$background',
  borderRadius: '$xl',
  padding: '$4',
  gap: '$3',
});

/* ------------------------------------------------------------------ *
 * Chat bubble + held draft + suggestion bubble
 * ------------------------------------------------------------------ */
export const Bubble = styled(YStack, {
  maxWidth: '84%',
  paddingVertical: 11, paddingHorizontal: 15,
  variants: {
    mine: {
      true:  { alignSelf: 'flex-end', backgroundColor: '$primaryBackground', borderRadius: 18, /* tail */ },
      false: { alignSelf: 'flex-start', backgroundColor: '$backgroundMuted', borderRadius: 18 },
    },
    held: {
      true: {
        alignSelf: 'flex-end', backgroundColor: '$background',
        borderRadius: 18, borderWidth: 1.5, borderStyle: 'dashed',
        borderColor: '$connectaCoral',
      },
    },
    sent: {
      true: {
        alignSelf: 'flex-end', backgroundColor: '$background',
        borderRadius: 18, borderWidth: 1, borderColor: '$border1',
      },
    },
  } as const,
});

/* ------------------------------------------------------------------ *
 * "Why?" expander — collapsible reasoning panel
 * ------------------------------------------------------------------ */
export function WhyExpander({
  label = 'Защо?', eyebrow = 'Защо този nudge', text,
  helpIcon, chevronDownIcon, chevronUpIcon,
}: {
  label?: string; eyebrow?: string; text: string;
  helpIcon?: React.ReactNode; chevronDownIcon?: React.ReactNode; chevronUpIcon?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <YStack gap="$2">
      <XStack tag="button" alignItems="center" gap="$1" cursor="pointer"
              backgroundColor="transparent" onPress={() => setOpen(o => !o)}>
        {helpIcon}
        <Text fontFamily="$body" fontSize={12} fontWeight="$semi" color="$color">{label}</Text>
        {open ? chevronUpIcon : chevronDownIcon}
      </XStack>
      {open && (
        <YStack backgroundColor="rgba(255,255,255,0.85)" borderRadius="$md" padding="$3" gap="$1">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Body fontSize={12.5} lineHeight={19} color="$connectaInk">{text}</Body>
        </YStack>
      )}
    </YStack>
  );
}

/* ================================================================== *
 * NudgeBanner — the signature GoodTalk component.
 * Full lifecycle: prompt → suggested → sent.
 *
 * <Theme name="voice_goodtalk">
 *   <NudgeBanner
 *     draft="…risky message…"
 *     suggestion="…calmer rewrite…"
 *     why="…reasoning…"
 *     icons={{ sparkles, pencil, send, refresh, check, help, chevDown, chevUp, clock }}
 *   />
 * </Theme>
 * ================================================================== */
type NudgeIcons = Partial<Record<
  'sparkles' | 'pencil' | 'send' | 'refresh' | 'check' | 'help' | 'chevDown' | 'chevUp' | 'clock',
  React.ReactNode
>>;

export function NudgeBanner({
  draft, suggestion, why,
  headline = 'Това може да нарани нечии чувства. Искаш ли да сменим отговора ти?',
  badgeText = 'Неизпратено',
  icons = {},
}: {
  draft: string; suggestion: string; why: string;
  headline?: string; badgeText?: string; icons?: NudgeIcons;
}) {
  const [stage, setStage] = useState<'prompt' | 'suggested' | 'sent'>('prompt');
  const t = useTheme();

  return (
    <YStack gap="$2">
      {/* Held / delivered draft */}
      <YStack alignItems="flex-end" gap="$1">
        <Bubble held={stage !== 'sent'} sent={stage === 'sent'}>
          <Text fontFamily="$body" fontSize={14.5} lineHeight={20}
                color={stage === 'sent' ? '$connectaInk' : 'rgba(15,26,36,.62)'}>
            {stage === 'sent' ? suggestion : draft}
          </Text>
        </Bubble>
        <XStack alignItems="center" gap="$1" paddingRight="$1">
          {stage === 'sent' ? icons.check : icons.clock}
          <Meta color={stage === 'sent' ? '$stateOkAccent' : '$connectaCoral'}>
            {stage === 'sent' ? 'изпратено · 14:32' : 'задържано · не е изпратено'}
          </Meta>
        </XStack>
      </YStack>

      {/* Banner */}
      <CardShell
        // soft shadow from theme (web: boxShadow string)
        {...({ style: { boxShadow: (t as any).shadow?.get?.() } } as any)}
      >
        {stage !== 'sent' && (
          <XStack>
            <Badge icon={icons.sparkles}>{badgeText}</Badge>
          </XStack>
        )}

        {stage !== 'sent' && <Headline fontSize={16} lineHeight={22}>{headline}</Headline>}

        {stage === 'prompt' && (
          <>
            <WhyExpander text={why} helpIcon={icons.help}
                         chevronDownIcon={icons.chevDown} chevronUpIcon={icons.chevUp} />
            <XStack gap="$2">
              <PrimaryButton flex onPress={() => setStage('suggested')}>
                {icons.sparkles}
                <ButtonLabel color="$primaryColor">Предложи ми</ButtonLabel>
              </PrimaryButton>
              <GhostButton iconOnly aria-label="Редактирай">{icons.pencil}</GhostButton>
            </XStack>
          </>
        )}

        {stage === 'suggested' && (
          <YStack backgroundColor="$whyBackground" borderRadius="$lg" padding="$3" gap="$2">
            <XStack alignItems="center" gap="$1">
              {icons.sparkles}
              <Eyebrow>Предложение от GoodTalk</Eyebrow>
            </XStack>
            <YStack backgroundColor="rgba(255,255,255,0.6)" borderRadius="$lg" padding="$3">
              <Text fontFamily="$body" fontSize={14.5} fontWeight="$medium"
                    lineHeight={20} color="$connectaInk">{suggestion}</Text>
            </YStack>
            <XStack gap="$2">
              <PrimaryButton flex onPress={() => setStage('sent')}>
                {icons.send}
                <ButtonLabel color="$primaryColor">Изпрати</ButtonLabel>
              </PrimaryButton>
              <GhostButton iconOnly aria-label="Друго предложение" onPress={() => setStage('prompt')}>
                {icons.refresh}
              </GhostButton>
            </XStack>
          </YStack>
        )}

        {stage === 'sent' && (
          <XStack alignItems="center" gap="$3">
            {icons.check}
            <YStack>
              <Text fontFamily="$body" fontSize={15} fontWeight="$bold" color="$color">Изпратено</Text>
              <Body fontSize={12.5} color="$colorSubtle">Виждат само новата версия.</Body>
            </YStack>
          </XStack>
        )}
      </CardShell>
    </YStack>
  );
}

/* ================================================================== *
 * CoachCard — static coaching card (Cosmo / Teacher) on the same shell.
 * No safety lifecycle; badge + headline + optional body + expander +
 * up to two actions.
 * ================================================================== */
export function CoachCard({
  badgeText, badgeIcon, name, headline, body,
  expander, primary, secondary,
}: {
  badgeText: string; badgeIcon?: React.ReactNode;
  name?: string; headline: string; body?: string;
  expander?: { label: string; eyebrow: string; text: string; helpIcon?: React.ReactNode; chevronDownIcon?: React.ReactNode; chevronUpIcon?: React.ReactNode };
  primary?: { label: string; icon?: React.ReactNode };
  secondary?: { label?: string; icon?: React.ReactNode };
}) {
  const t = useTheme();
  return (
    <CardShell {...({ style: { boxShadow: (t as any).shadow?.get?.() } } as any)}>
      <XStack><Badge icon={badgeIcon}>{badgeText}</Badge></XStack>
      {name && <Meta color="$colorSubtle" fontFamily="$body" fontSize={12}>{name}</Meta>}
      <Headline fontSize={16} lineHeight={22}>{headline}</Headline>
      {body && <Body opacity={0.82}>{body}</Body>}
      {expander && (
        <WhyExpander label={expander.label} eyebrow={expander.eyebrow} text={expander.text}
                     helpIcon={expander.helpIcon}
                     chevronDownIcon={expander.chevronDownIcon} chevronUpIcon={expander.chevronUpIcon} />
      )}
      {(primary || secondary) && (
        <XStack gap="$2">
          {primary && (
            <PrimaryButton flex>
              {primary.icon}
              <ButtonLabel color="$primaryColor">{primary.label}</ButtonLabel>
            </PrimaryButton>
          )}
          {secondary && (
            secondary.label
              ? <GhostButton>{secondary.icon}<ButtonLabel color="$ghostColor">{secondary.label}</ButtonLabel></GhostButton>
              : <GhostButton iconOnly>{secondary.icon}</GhostButton>
          )}
        </XStack>
      )}
    </CardShell>
  );
}

export { Theme };
