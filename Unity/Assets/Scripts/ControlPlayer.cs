using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class ControlPlayer : MonoBehaviour
{

    public float max_vel = 5;
    public float min_vel = 0.1f;

    private Rigidbody2D corps;

    public int max_jumps = 1;
    private int cur_jumps = 0;
    public bool allow_walljumps = false;

    private float x_acc = 0;
    private float y_acc = 0;
    private Vector2 mouse_position;

    // Start is called before the first frame update
    void Start()
    {
        this.corps = gameObject.GetComponent<Rigidbody2D>();
    }

    void OnMove(InputValue value)
    {
        Vector2 Move = value.Get<Vector2>();
        x_acc = Move[0];
        y_acc = 0.3f * Move[1];
    }

    void OnJump(InputValue value)
    {
        if(value.isPressed)
        {
            if(this.cur_jumps < this.max_jumps){
                this.corps.velocity = Vector2.zero;
                cur_jumps ++;
                this.y_acc = 1.0f - 0.25f * cur_jumps;
            }
        }
    }

    void OnCollisionEnter2D(Collision2D col)
    {
        ContactPoint2D point = col.GetContact(0);
        if(point.normal[1] > 0 || (point.normal[0] != 0 && allow_walljumps))
        {
            this.cur_jumps = 0;
        }
    }


    void FixedUpdate()
    {
        Vector2 force_avance = new Vector2(this.x_acc * 8f,0);
        Vector2 force_saut = new Vector2(0,this.y_acc * 7);
        this.y_acc = 0;
        this.corps.AddForce(force_saut,ForceMode2D.Impulse);
        this.corps.AddForce(force_avance,ForceMode2D.Force);
        if (this.corps.velocity[0] > this.max_vel)
        {
            this.corps.velocity = new Vector2(this.max_vel,this.corps.velocity[1]);
        }
        if (this.corps.velocity[0] < -this.max_vel)
        {
            this.corps.velocity = new Vector2(-this.max_vel,this.corps.velocity[1]);
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
}
