"use client";

// import { FloppyDisk } from "@gravity-ui/icons";
// import { useForm } from "react-hook-form";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { authClient } from '../../lib/auth-client'
import { toast } from "react-toastify";





export default function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSubmitFunc = async (info) => {

    const { name, email, image, password } = info;

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      callbackURL: "/",
    });
    if (error) {
      toast.error('Something went wrong. Plz try again')
    }
    if (data) {
      toast.success('SignUp successful');
    }
  };

  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 justify-center p-10">
      <Form className="flex w-97 flex-col gap-4 p-7 rounded-2xl bg-amber-50" onSubmit={handleSubmit(handleSubmitFunc)}>

        <TextField isRequired className="w-full max-w-64" name="fullName">
          <Label>Full Name</Label>
          <Input {...register("name", { required: true })} placeholder="John Doe" />
          {errors.name && <p className="text-red-500">Please enter the name</p>}

          <Description>This field is required</Description>
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input  {...register("email", { required: true })} placeholder="john@example.com" />
          {errors.email && <p className="text-red-500">Please enter the email</p>}

          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input  {...register("password", { required: true })} placeholder="Enter your password" />
          {errors.password && <p className="text-red-500">Please enter the password</p>}

          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>

        <Label className="label text-lg font-semibold">Photo URL</Label>
        <input
          {...register("image", { required: true })}
          type="url"
          className="input w-full bg-base-200 border-none"
          placeholder="https://example.com/image.png"
        />
        {errors.image && <p className="text-red-500 text-xs mt-1">Please enter a valid photo URL</p>}
        <div className="flex gap-2">
          <Button type="submit" className={'btn btn-warning rounded-full'}>
            <Check />
            submit
          </Button>
          <Button type="reset" className={'btn btn-outline btn-warning rounded-full text-amber-700'}>
            Reset
          </Button>
        </div>

        <div className="flex justify-center gap-1">
          <small className="flex gap-1 my-2 items-center">
            <h3>Already Signed Up?</h3>
            <Link href="/login" className={'text-amber-700 text-lg'}>Login</Link>
          </small>
        </div>

        <div className="w-full text-center">
          <button onClick={signIn} className="btn bg-amber-400 w-full text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Signup with Google
          </button>
        </div>
      </Form>




    </div>
  );
}