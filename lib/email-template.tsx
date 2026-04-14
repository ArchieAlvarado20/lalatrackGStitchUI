import { resend, FROM_EMAIL } from "@/lib/resend";
import { render } from "@react-email/render";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type ResetPasswordVariables = {
  resetLink: string;
  userEmail: string;
  userName?: string;
  expirationMinutes?: string;
};

type SendEmailParams = {
  to: string;
  template: "reset-password";
  variables: ResetPasswordVariables;
  subject?: string;
  companyName: string;
};

export async function sendEmail({
  to,
  template,
  variables,
  subject,
  companyName,
}: SendEmailParams) {
  const html = await render(renderTemplate(template, variables, companyName));

  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: subject ?? "Reset Your Password",
    html,
  });
}

function renderTemplate(
  template: string,
  variables: ResetPasswordVariables,
  companyName: string,
) {
  switch (template) {
    case "reset-password": {
      const {
        resetLink,
        userEmail,
        userName = "User",
        expirationMinutes = "60",
      } = variables;

      return (
        <Html lang="en" dir="ltr">
          <Tailwind>
            <Head />
            <Preview>Reset your password for {companyName}</Preview>
            <Body className="bg-gray-100 font-sans py-[40px]">
              <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
                {/* Header */}
                <Section className="text-center mb-[32px]">
                  <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                    Password Reset Request
                  </Heading>
                  <Text className="text-[16px] text-gray-600 m-0">
                    We received a request to reset your password
                  </Text>
                </Section>

                {/* Main Content */}
                <Section className="mb-[32px]">
                  <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                    Hello {userName},
                  </Text>
                  <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                    Someone requested a password reset for your {companyName}{" "}
                    account associated with <strong>{userEmail}</strong>.
                  </Text>
                  <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[24px]">
                    If this was you, click the button below to reset your
                    password. This link will expire in 24 hours for security
                    reasons.
                  </Text>

                  {/* Reset Button */}
                  <Section className="text-center mb-[24px]">
                    <Button
                      href={resetLink}
                      className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                    >
                      Reset Password
                    </Button>
                  </Section>

                  <Text className="text-[14px] text-gray-600 leading-[20px] m-0 mb-[16px]">
                    If the button doesn&apos;t work, you can copy and paste this
                    link into your browser:
                  </Text>
                  <Text className="text-[14px] text-blue-600 leading-[20px] m-0 mb-[24px] break-all">
                    <Link href={resetLink} className="text-blue-600 underline">
                      {resetLink}
                    </Link>
                  </Text>

                  <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                    If you didn&apos;t request this password reset, you can
                    safely ignore this email. Your password will remain
                    unchanged.
                  </Text>
                </Section>

                {/* Security Notice */}
                <Section className="bg-amber-50 border border-amber-200 rounded-[8px] p-[20px] mb-[32px]">
                  <Text className="text-[14px] text-amber-800 leading-[20px] m-0 mb-[8px] font-semibold">
                    🔒 Security Tip
                  </Text>
                  <Text className="text-[14px] text-amber-700 leading-[20px] m-0">
                    For your security, never share your password or reset links
                    with anyone. {companyName} will never ask for your password
                    via email.
                  </Text>
                </Section>

                {/* Footer */}
                <Section className="border-t border-gray-200 pt-[24px]">
                  <Text className="text-[14px] text-gray-500 leading-[20px] m-0 mb-[8px]">
                    Best regards,
                    <br />
                    The {companyName} Team
                  </Text>
                  <Text className="text-[12px] text-gray-400 leading-[16px] m-0 mb-[8px]">
                    123 Business Street, Suite 100
                    <br />
                    Business City, BC 12345
                  </Text>
                  <Text className="text-[12px] text-gray-400 leading-[16px] m-0">
                    <Link href="#" className="text-gray-400 underline">
                      Unsubscribe
                    </Link>{" "}
                    |
                    <Link href="#" className="text-gray-400 underline ml-[8px]">
                      Privacy Policy
                    </Link>{" "}
                    |<span className="ml-[8px]">© 2026 {companyName}</span>
                  </Text>
                  <Text>
                    This Email will only last for just {expirationMinutes}{" "}
                    minutes
                  </Text>
                </Section>
              </Container>
            </Body>
          </Tailwind>
        </Html>
      );
    }
  }
}
