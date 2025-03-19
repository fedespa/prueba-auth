import LoginForm from "@/components/LoginForm";


export const metadata = {
 title: 'Login',
 description: 'Login',
};

export default function LoginPage() {
  console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <div>
      <LoginForm />
    </div>
  );
}