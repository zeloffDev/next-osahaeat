export interface response<type> {
  status: 200;
  data: type;
  description: string | null;
  success: boolean;
}
