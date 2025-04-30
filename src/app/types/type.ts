import { z } from "zod";

export type ProfileFormType = {
  name: string;
  title: string;
  email: string;
  oldPassword?: string;
  password?: string;
  passwordConfirmation?: string;
};

type DonationsDto = {
  id: string;
  human_readable_id: string;
  title: string;
  recipient: string;
  description: string;
  thumbnail: string;
  total_donors: number;
  program_image: string;
  current_donation: number;
  target: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type DonationsCard = Pick<
  DonationsDto,
  | "id"
  | "human_readable_id"
  | "title"
  | "thumbnail"
  | "current_donation"
  | "target"
  | "created_at"
  | "updated_at"
>;

export type DetailsDonation = Pick<
  DonationsDto,
  | "id"
  | "recipient"
  | "human_readable_id"
  | "title"
  | "description"
  | "program_image"
  | "total_donors"
  | "current_donation"
  | "target"
  | "created_at"
  | "updated_at"
>;

type GlobalMetadataDto = {
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
};

export type GetDonationsResponse = {
  data: DonationsCard[];
  meta: GlobalMetadataDto;
};
export type GetDetailsDonationResponse = {
  data: DetailsDonation;
};

/*export type DonationFormType = {
  name: string;
  email: string;
  amount: number;
  payment_method: "qris" | "card";
  card_number?: string;
  card_expire?: string;
  card_cvv?: string;
  save_card?: boolean;
  customer_details?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    cardholder_name?: string;
    country_code?: string;
    postal_code?: string;
  };
};*/

export const donationFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Name must be at least 1 character long" }),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Email must be a valid email address" }),

  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .min(1, { message: "Amount must be at least 1" }),

  payment_method: z.enum(["qris", "card"], {
    required_error: "Payment method is required",
    invalid_type_error:
      'Payment method must be either "QRIS" or "Credit or Debit Card"',
  }),

  card_number: z
    .string({
      invalid_type_error: "Card number must be a string",
    })
    .regex(
      /^(?:\d{13,19}|\d{4}\s\d{4}\s\d{4}\s\d{1,4}|\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{1,3})$/,
      { message: "Invalid card number format" }
    )
    .optional(),

  card_expire: z
    .string({
      invalid_type_error: "Card expiration must be a string",
    })
    .regex(/^0[0-9]|1[0-2]\/[0-9]{2}$/, {
      message: "Card expiration must be in MM/YY format",
    })
    .optional(),

  card_cvv: z
    .string({
      invalid_type_error: "CVV must be a string",
    })
    .regex(/^\d{3}$/, {
      message: "CVV must be exactly 3 digits",
    })
    .optional(),

  save_card: z
    .boolean({
      invalid_type_error: "Save card must be a boolean value",
    })
    .optional(),

  customer_details: z
    .object({
      first_name: z
        .string({
          required_error: "First name is required",
          invalid_type_error: "First name must be a string",
        })
        .min(1, { message: "First name must be at least 1 character" }),

      last_name: z
        .string({
          required_error: "Last name is required",
          invalid_type_error: "Last name must be a string",
        })
        .min(1, { message: "Last name must be at least 1 character" }),

      phone_number: z
        .string({
          required_error: "Phone number is required",
          invalid_type_error: "Phone number must be a string",
        })
        .regex(/^\+?[0-9\s\-().]{10,20}$/, {
          message: "Phone number format is invalid",
        })
        .min(1, { message: "Phone number must be at least 1 character" }),
    })
    .optional(),
});

export type DonationFormType = z.infer<typeof donationFormSchema>;

export type ChargeTransactionType = {
  name: string;
  email: string;
  amount: number;
  payment_method: "qris" | "card";
  id_token?: string;
  save_card?: boolean;
  customer_details?: {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  };
};

export type GetPaymentNotificationResponse = {
  data: string;
};

export const forgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Email must be a valid email address" }),
});

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

export const registerUserSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(1, { message: "Name must be at least 1 character long" }),

    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email({ message: "Email must be a valid email address" }),

    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(1, { message: "Password must be at least 6 characters long" }),

    passwordConfirmation: z
      .string({
        required_error: "Password confirmation is required",
        invalid_type_error: "Password confirmation must be a string",
      })
      .min(1, {
        message: "Password confirmation must be at least 6 characters long",
      }),
  })
  .superRefine(({ passwordConfirmation, password }, ctx) => {
    if (passwordConfirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["passwordConfirmation"],
      });
    }
  });

export type RegisterUserType = z.infer<typeof registerUserSchema>;
