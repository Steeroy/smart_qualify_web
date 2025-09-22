import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get PayFast notification data
    const formData = await request.formData();
    
    // Extract payment details
    const paymentData = {
      m_payment_id: formData.get('m_payment_id'),
      pf_payment_id: formData.get('pf_payment_id'),
      payment_status: formData.get('payment_status'),
      item_name: formData.get('item_name'),
      amount_gross: formData.get('amount_gross'),
      amount_fee: formData.get('amount_fee'),
      amount_net: formData.get('amount_net'),
      custom_str1: formData.get('custom_str1'), // Could be template ID
      name_first: formData.get('name_first'),
      name_last: formData.get('name_last'),
      email_address: formData.get('email_address'),
    };

    // Log the payment notification (in production, save to database)
    console.log('PayFast Payment Notification:', paymentData);

    // TODO: In production, you should:
    // 1. Verify the payment signature
    // 2. Save payment record to database
    // 3. Update user's template access
    // 4. Send confirmation email

    // Respond with 200 OK to acknowledge receipt
    return NextResponse.json({ 
      success: true, 
      message: 'Payment notification received' 
    });

  } catch (error) {
    console.error('PayFast notification error:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing notification' },
      { status: 500 }
    );
  }
}