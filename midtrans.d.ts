interface MidtransNew3ds {
  getCardToken: (
    card: {
      card_number?: string;
      card_exp_month?: string;
      card_exp_year?: string;
      card_cvv: string;
      token_id?: string;
      bank_one_time_token?: string;
    },
    options: {
      onSuccess: (response: {
        status_code: string;
        status_message: string;
        token_id: string;
        hash: string;
      }) => void;
      onFailure: (response: {
        status_code: string;
        status_message: string;
        validation_messages: string[];
        id: string;
      }) => void;
    }
  ) => void;
  redirect: (
    redirect_url: string,
    options: {
      callbackUrl: string;
    }
  ) => void;
  authenticate: (
    redirect_url: string,
    options: {
      performAuthentication: (redirect_url: string) => void;
      onSuccess: (response: unknown) => void;
      onFailure: (response: unknown) => void;
      onPending: (response: unknown) => void;
    }
  ) => void;
}

interface Window {
  MidtransNew3ds: MidtransNew3ds;
}
