import { StateProvider } from '@/provider/State.provider';

export default function Template({ children }: { children: React.ReactNode }) {
  return <StateProvider>{children}</StateProvider>;
}
