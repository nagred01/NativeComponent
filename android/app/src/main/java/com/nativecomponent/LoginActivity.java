package com.nativecomponent;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;


public class LoginActivity extends AppCompatActivity {
    LinearLayout container;
    EditText edtEmail, edtPass ;
    Button btnLogin;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        container = new LinearLayout(this);
        container.setOrientation(LinearLayout.VERTICAL);
        edtEmail = new EditText(this);
        edtEmail.setHint("Enter Email");
        edtEmail.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        edtEmail.setPadding(20, 20, 20, 20);



        edtPass = new EditText(this);
        edtPass.setHint("Enter Password");

        edtPass.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        edtPass.setPadding(20, 20, 20, 20);


        btnLogin = new Button(this);
        btnLogin.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        btnLogin.setPadding(20, 20, 20, 20);
        btnLogin.setText("Login");
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(intent);
            }
        });

        container.addView(edtEmail);

        container.addView(edtPass);
        container.addView(btnLogin);
        setContentView(container);
//        setContentView(R.layout.activity_login);
    }
}
