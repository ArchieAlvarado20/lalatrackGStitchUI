import PasswordResetPage from "./reset-password";

export default function Page({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  return <PasswordResetPage token={searchParams.token} />;
}
